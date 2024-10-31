/// <reference types="@rsbuild/core/types" />

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.svg' {
  const content: string
  export default content
}
