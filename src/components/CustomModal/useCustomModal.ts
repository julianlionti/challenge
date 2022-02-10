export interface CustomModalProps {
  title: string
  message: string
  onClose: () => void
  show: boolean
  ActionBtn: JSX.Element
  loading?: boolean
}

export const useCustomModal = (props: CustomModalProps) => {
  return { ...props }
}
