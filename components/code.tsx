import type { ComponentProps, ReactElement } from 'react'
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({
	weight: ["200","400","500","600","700"],
	display: 'swap',
	style: ['normal', 'italic'],
	subsets: ['latin', 'latin-ext']
})

export const Code = ({
  children,
  className = '',
  ...props
}: ComponentProps<'code'>): ReactElement => {
  const hasLineNumbers = 'data-line-numbers' in props
  return (
	<>
	<style jsx global>
      {`
          code {
              font-family: ${sourceCodePro.style.fontFamily};
		          font-size: 90% !important;
          }

		      pre {
		          line-height: 1.45
              background-color: rgba(48, 52, 80, 1) !important;
		      }
      `}
	</style>
    <code
      className={[
        'nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em]',
        'dark:nx-border-white/10 dark:nx-bg-white/10',
        hasLineNumbers ? '[counter-reset:line]' : '',
        className
      ].join(' ')}
      // always show code blocks in ltr
      dir="ltr"
      {...props}
    >
      {children}
    </code>
	</>
  )
}