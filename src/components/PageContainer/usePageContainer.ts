export interface PageContainerProps {
  title?: string
  withBack?: boolean
}

export const usePageContainer = (props: PageContainerProps) => {
  return { ...props }
}
