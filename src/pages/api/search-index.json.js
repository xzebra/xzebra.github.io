import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// This endpoint generates a search index from actual markdown files at build time
export async function GET() {
  const docs = [];
  const docsDir = path.join(process.cwd(), 'src/pages/docs');
  
  try {
    // Recursively scan docs directory for .astro and .md files
    function scanDirectory(dir, baseRoute = '/docs') {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          // Recursively scan subdirectories
          scanDirectory(filePath, `${baseRoute}/${file}`);
        } else if (file.endsWith('.astro') || file.endsWith('.md')) {
          const content = fs.readFileSync(filePath, 'utf8');
          const route = file === 'index.astro' || file === 'index.md' 
            ? baseRoute 
            : `${baseRoute}/${file.replace(/\.(astro|md)$/, '')}`;
          
          // Skip the main docs welcome page and _toc files
          if (route === '/docs' || file.startsWith('_')) {
            return;
          }
          
          let title = file.replace(/\.(astro|md)$/, '');
          let description = '';
          let bodyContent = content;
          
          if (file.endsWith('.md')) {
            // Parse markdown with gray-matter
            const { data: frontmatter, content: markdownContent } = matter(content);
            bodyContent = markdownContent;
            
            // Use frontmatter title if available, clean up AppFrames suffix
            if (frontmatter.title) {
              title = frontmatter.title.replace(/\s*-\s*AppFrames.*$/, '');
            }
            
            // Extract title from markdown h1 if no frontmatter title
            if (!frontmatter.title) {
              const h1Match = markdownContent.match(/^#\s+(.+)$/m);
              if (h1Match) {
                title = h1Match[1].trim();
              }
            }
            
            // Extract description from first paragraph after h1
            const afterH1 = markdownContent.replace(/^#\s+.+$/m, '').trim();
            const paragraphMatch = afterH1.match(/^(.+?)(?:\n\n|$)/);
            if (paragraphMatch) {
              description = paragraphMatch[1]
                .replace(/[#*_`\[\]()]/g, '') // Remove markdown formatting
                .trim()
                .substring(0, 150);
            }
          } else {
            // Handle .astro files (existing logic)
            const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
            bodyContent = content.replace(/^---\s*\n[\s\S]*?\n---/, '').trim();
            
            if (frontmatterMatch) {
              const titleMatch = content.match(/title[:\s]*["']([^"']+)["']/i);
              if (titleMatch) {
                title = titleMatch[1];
              }
            }
            
            // Extract title from h1 tags
            const h1Match = bodyContent.match(/<h1[^>]*>(.*?)<\/h1>/);
            if (h1Match) {
              title = h1Match[1].replace(/<[^>]+>/g, '').trim();
            }
            
            // Extract description from first paragraph after h1
            const afterH1 = bodyContent.replace(/<h1[^>]*>.*?<\/h1>/, '');
            const paragraphMatch = afterH1.match(/<p[^>]*>(.*?)<\/p>/);
            if (paragraphMatch) {
              description = paragraphMatch[1]
                .replace(/<[^>]+>/g, '')
                .trim()
                .substring(0, 150);
            }
          }
          
          // If no description found, extract from plain text
          if (!description) {
            const plainText = bodyContent
              .replace(/<[^>]+>/g, ' ') // Remove HTML tags
              .replace(/[#*_`\[\]()]/g, ' ') // Remove markdown formatting
              .replace(/\s+/g, ' ') // Normalize whitespace
              .trim();
            const sentences = plainText.split('.').filter(s => s.length > 20);
            if (sentences.length > 0) {
              description = sentences[0].substring(0, 150) + (sentences[0].length > 150 ? '...' : '');
            }
          }
          
          // Create searchable content
          const searchableContent = bodyContent
            .replace(/<[^>]+>/g, ' ') // Remove HTML tags
            .replace(/[#*_`\[\]()]/g, ' ') // Remove markdown formatting
            .replace(/[^\w\s]/g, ' ') // Remove special characters
            .replace(/\s+/g, ' ') // Normalize whitespace
            .toLowerCase()
            .substring(0, 500);
          
          docs.push({
            title: title || 'Documentation',
            description: description || 'Documentation page',
            route,
            content: `${title} ${description} ${searchableContent}`.toLowerCase()
          });
        }
      });
    }
    
    // Scan the docs directory
    if (fs.existsSync(docsDir)) {
      scanDirectory(docsDir);
    }
    
    // Sort by route for consistent ordering
    docs.sort((a, b) => a.route.localeCompare(b.route));
    
  } catch (error) {
    console.error('Error generating search index:', error);
    // Fallback to empty array if there's an error
  }

  return new Response(JSON.stringify(docs), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}