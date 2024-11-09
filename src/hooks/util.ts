/**
 * document 이벤트를 한번만 실행하는 Hook Util
 */
export const onceDocumentEvent = <T = Event>(
  type: string,
  listener: (evt: T) => void,
  options?: boolean | AddEventListenerOptions
) => {
  const handler = listener as EventListener

  document.addEventListener(type, handler, options)
  return () => {
    document.removeEventListener(type, handler, options)
  }
}
