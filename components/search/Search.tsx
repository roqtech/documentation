import React, { useState, useRef, useEffect } from 'react';
//import EventSource from "eventsource";
import { Modal } from "./Modal";
import { marked } from 'marked';

const Search = () => {
	const [open, setOpen] = useState(false);
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value = question;
		}
	}, [question]);

	const answerQuestion = (e) => {
		e.preventDefault()
		setAnswer("")
		setIsLoading(true)

		console.log(inputRef.current.value)

		const query = new URLSearchParams({ query: question })
		const projectUrl = `https://cyywmnfdoyjabkblnnen.supabase.co/functions/v1/vector-search`
		const queryURL = `${projectUrl}?${query.toString()}`
		const eventSource = new EventSource(queryURL)

		eventSource.addEventListener("error", (err) => {
			setIsLoading(false)
			console.error(err)
		})

		eventSource.addEventListener("message", (e) => {
			setIsLoading(false)

			if (e.data === "[DONE]") {
				eventSource.close()
				return
			}

			const completionResponse = JSON.parse(e.data)
			const text = completionResponse.choices[0].text

			setAnswer(prevAnswer => prevAnswer + text)
		});

		setIsLoading(true)
	}
	/**
	 * TODO how to use nextra theme for this custom component
	 */
	return (
		<>
			<div className="nextra-search nx-relative md:nx-w-64 nx-hidden md:nx-inline-block mx-min-w-[200px]">
				<div className="nx-relative nx-flex nx-items-center nx-text-gray-900 contrast-more:nx-text-gray-800 dark:nx-text-gray-300 contrast-more:dark:nx-text-gray-300">
					<input spellCheck="false" className="nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors nx-text-base nx-leading-tight md:nx-text-sm nx-bg-black/[.05] dark:nx-bg-gray-50/10 focus:nx-bg-white dark:focus:nx-bg-dark placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400 contrast-more:nx-border contrast-more:nx-border-current" type="search" placeholder="Search documentation…" onClick={() => setOpen(true)} ref={inputRef} />
					<kbd className="nx-absolute nx-my-1.5 nx-select-none ltr:nx-right-1.5 rtl:nx-left-1.5 nx-h-5 nx-rounded nx-bg-white nx-px-1.5 nx-font-mono nx-text-[10px] nx-font-medium nx-text-gray-500 nx-border dark:nx-border-gray-100/20 dark:nx-bg-dark/50 contrast-more:nx-border-current contrast-more:nx-text-current contrast-more:dark:nx-border-current nx-items-center nx-gap-1 nx-pointer-events-none nx-hidden sm:nx-flex nx-opacity-100">CTRL K</kbd>
				</div>
			</div>
			<Modal open={open} onClose={() => setOpen(false)}>
				<form onSubmit={answerQuestion} className="flex">

					<div className="nextra-search nx-relative md:nx-w-64 nx-hidden md:nx-inline-block mx-min-w-[200px]">
						<div className="nx-relative nx-flex nx-items-center nx-text-gray-900 contrast-more:nx-text-gray-800 dark:nx-text-gray-300 contrast-more:dark:nx-text-gray-300">
							<input spellCheck="false" className="nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors nx-text-base nx-leading-tight md:nx-text-sm nx-bg-black/[.05] dark:nx-bg-gray-50/10 focus:nx-bg-white dark:focus:nx-bg-dark placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400 contrast-more:nx-border contrast-more:nx-border-current" type="search" placeholder="Search documentation…" value={question} onChange={(e) => setQuestion(e.target.value)} />
							<kbd className="nx-absolute nx-my-1.5 nx-select-none ltr:nx-right-1.5 rtl:nx-left-1.5 nx-h-5 nx-rounded nx-bg-white nx-px-1.5 nx-font-mono nx-text-[10px] nx-font-medium nx-text-gray-500 nx-border dark:nx-border-gray-100/20 dark:nx-bg-dark/50 contrast-more:nx-border-current contrast-more:nx-text-current contrast-more:dark:nx-border-current nx-items-center nx-gap-1 nx-pointer-events-none nx-hidden sm:nx-flex nx-opacity-100">CTRL K</kbd>
						</div>
					</div>

					<div>
						<p className='nx-mt-6 nx-leading-7' dangerouslySetInnerHTML={{ __html: isLoading ? 'Loading...' : marked(answer, { mangle: false, headerIds: false }) }} />
					</div>

				</form>
			</Modal>
		</>
	);
}

export { Search }