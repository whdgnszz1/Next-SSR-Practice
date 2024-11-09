import { CustomToastPos } from '@/stores/toast'

export const animationByPos = (pos: CustomToastPos) => {
  let initial: any = {}
  let animate: any = {}
  let exit: any = {}

  switch (pos) {
    case CustomToastPos.TOP:
      initial = {
        // opacity: 0,
        y: -10
      }
      animate = {
        // opacity: 1,
        y: 0
      }
      exit = {
        // opacity: 0,
        y: 0
      }
      break
    case CustomToastPos.MIDDLE:
      initial = {
        // opacity: 0,
        scale: 0.9
      }
      animate = {
        // opacity: 1,
        scale: 1
      }
      exit = {
        // opacity: 0,
        scale: 0.9
      }
      break
    case CustomToastPos.BOTTOM:
      initial = {
        // opacity: 0,
        y: 10
      }
      animate = {
        // opacity: 1,
        y: 0
      }
      exit = {
        // opacity: 0,
        y: 0
      }
      break
  }
  return { initial, animate, exit }
}
