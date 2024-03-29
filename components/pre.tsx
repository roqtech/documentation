import type { ComponentProps, ReactElement} from 'react';
import { useCallback, useRef } from 'react';
import { CopyToClipboard, Button } from 'nextra/components';
import { WordWrapIcon } from 'nextra/icons';
import { Source_Code_Pro } from 'next/font/google';
import pre_Style from "./pre.module.css"

const sourceCodePro = Source_Code_Pro({
	weight: ["200","400","500","600","700"],
	display: 'swap',
	style: ['normal', 'italic'],
	subsets: ['latin', 'latin-ext']
})


export const Pre = ({
  children,
  className = '',
  hasCopyCode,
  filename,
  ...props
}: ComponentProps<'pre'> & {
  filename?: string
  hasCopyCode?: boolean
}): ReactElement => {
  const preRef = useRef<HTMLPreElement | null>(null)

  const toggleWordWrap = useCallback(() => {
    const htmlDataset = document.documentElement.dataset
    const hasWordWrap = 'nextraWordWrap' in htmlDataset
    if (hasWordWrap) {
      delete htmlDataset.nextraWordWrap
    } else {
      htmlDataset.nextraWordWrap = ''
    }
  }, [])

  return (
	<>
	<style jsx global>
      {`
          code {  
			        font-family: ${sourceCodePro.style.fontFamily};
			        font-size: 90% !important;
          }
      `}
	</style>
    <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">
      {filename && (
        <div className="nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200">
          {filename}
        </div>
      )}
      <pre
        className={[
          'nx-bg-primary-700/5 dark:nx-bg-primary-300/10 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased nx-text-[.9em]',
          'contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40', pre_Style.code,
          filename ? 'nx-pt-12 nx-pb-4' : 'nx-py-4',
          className
        ].join(' ')}
        ref={preRef}
        {...props}
      >
        {children}
      </pre>
      <div
        className={[
          'nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100',
          'nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0',
          filename ? 'nx-top-8' : 'nx-top-0'
        ].join(' ')}
      >
        <Button
          onClick={toggleWordWrap}
          className="md:nx-hidden"
          title="Toggle word wrap"
        >
          <WordWrapIcon className="nx-pointer-events-none nx-h-4 nx-w-4" />
        </Button>
        {hasCopyCode && (
          <CopyToClipboard
            getValue={() =>
              preRef.current?.querySelector('code')?.textContent || ''
            }
          />
        )}
      </div>
    </div>
	</>
  )
}