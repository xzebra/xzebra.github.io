import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Helper function to read TOC file and get page ordering
function readTOCFile(folderPath) {
  const tocPath = path.join(folderPath, '_toc.md');
  
  if (fs.existsSync(tocPath)) {
    const tocContent = fs.readFileSync(tocPath, 'utf8');
    const lines = tocContent.split('\n').filter(line => line.trim());
    const pageOrder = {};
    
    lines.forEach((line, index) => {
      const match = line.match(/^\s*-\s*\[.*?\]\((.+?)\)/);
      if (match) {
        const filename = match[1].replace(/\.md$/, '');
        pageOrder[filename] = index + 1;
      }
    });
    
    return pageOrder;
  }
  
  return {};
}

// Helper function to convert kebab-case to Title Case
function toTitleCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Single source of truth for docs TOC generation
export function generateTOC() {
  const docsDir = path.join(process.cwd(), 'src/pages/docs');
  const sections = [];
  
  try {
    const entries = fs.readdirSync(docsDir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const folderPath = path.join(docsDir, entry.name);
        const files = fs.readdirSync(folderPath);
        
        // Filter markdown files and skip _toc.md files
        const mdFiles = files.filter(file => 
          file.endsWith('.md') && !file.startsWith('_')
        );
        
        if (mdFiles.length > 0) {
          const pageOrder = readTOCFile(folderPath);
          
          const pages = mdFiles
            .map(file => {
              const filePath = path.join(folderPath, file);
              const fileContent = fs.readFileSync(filePath, 'utf8');
              const { data: frontmatter } = matter(fileContent);
              
              const nameWithoutExt = file.replace(/\.md$/, '');
              const order = pageOrder[nameWithoutExt] || 999; // Default order for pages not in TOC
              
              // Use frontmatter title if available, otherwise generate from filename
              const title = frontmatter.title 
                ? frontmatter.title.replace(/\s*-\s*AppFrames.*$/, '') // Remove "- AppFrames" suffix
                : toTitleCase(nameWithoutExt);
              
              return {
                file: nameWithoutExt,
                title: title,
                order: order,
                route: `/docs/${entry.name}/${nameWithoutExt}`
              };
            })
            .sort((a, b) => a.order - b.order);
          
          // Generate section title from folder name
          const sectionTitle = toTitleCase(entry.name);
          
          sections.push({
            title: sectionTitle,
            order: entry.name === 'guides' ? 1 : 2, // Guides first, then others
            pages
          });
        }
      }
    }
    
    return sections.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error generating TOC:', error);
    return [];
  }
}

// Generate cards data from markdown files in subfolders
export function getDocsCards() {
  const docsDir = path.join(process.cwd(), 'src/pages/docs');
  const cards = [];
  
  try {
    const entries = fs.readdirSync(docsDir, { withFileTypes: true });
    
    // Scan subfolders
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const folderPath = path.join(docsDir, entry.name);
        const files = fs.readdirSync(folderPath);
        
        for (const file of files) {
          if (file.endsWith('.md') && !file.startsWith('_')) {
            const filePath = path.join(folderPath, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data: frontmatter } = matter(fileContent);
            
            if (frontmatter.card) {
              const nameWithoutExt = file.replace(/\.md$/, '');
              const actualRoute = `/docs/${entry.name}/${nameWithoutExt}`;
              
              cards.push({
                ...frontmatter.card,
                route: actualRoute
              });
            }
          }
        }
      }
    }
    
    // Sort by order
    return cards.sort((a, b) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.error('Error reading docs cards:', error);
    return [];
  }
}