export type Article = {
  id: number
  headline: string
  snippet: string
  body: string
}

export type ContextType = {
  articles: Article[]
  setArticles: (articles: Article[]) => void
}
