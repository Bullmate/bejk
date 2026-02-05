import cs from '../locales/cs.json'

// renders the HTML from cs.json (it contains <span>...</span>)
export const t = (key) => (
  <span dangerouslySetInnerHTML={{ __html: cs[key] || '' }} />
)
