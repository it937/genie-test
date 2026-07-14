export function textToHtml(text = '') {
  const blocks = text.trim().split(/\n{2,}/)

  return blocks
    .map((block) => {
      const lines = block.split('\n')

      if (lines.every((line) => line.trim().startsWith('- '))) {
        const items = lines
          .map((line) => line.trim().replace(/^- /, ''))
          .map((line) => `<li>${formatInline(line)}</li>`)
          .join('')

        return `<ul>${items}</ul>`
      }

      if (block.startsWith('### ')) {
        return `<h3>${formatInline(block.replace(/^### /, ''))}</h3>`
      }

      if (block.startsWith('## ')) {
        return `<h2>${formatInline(block.replace(/^## /, ''))}</h2>`
      }

      return `<p>${formatInline(lines.join('<br />'))}</p>`
    })
    .join('')
}

export function htmlToText(html = '') {
  return html
    .replace(/<h2[^>]*>(.*?)<\/h2>/gis, '## $1\n\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gis, '### $1\n\n')
    .replace(/<ul[^>]*>(.*?)<\/ul>/gis, (_match, list) => {
      return `${list.replace(/<li[^>]*>(.*?)<\/li>/gis, '- $1\n')}\n`
    })
    .replace(/<p[^>]*>(.*?)<\/p>/gis, '$1\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gis, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gis, '*$1*')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function formatInline(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}
