import cs from './locales/cs.json'

export const t = (key) => (
  <span dangerouslySetInnerHTML={{ __html: cs[key] || '' }} />
)

