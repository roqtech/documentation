import React, { useState, useRef } from 'react';
import { Modal } from "./Modal";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const answerQuestion = (e) => {
	e.preventDefault()
	setAnswer("")
	setIsLoading(true)
  
	const query = new URLSearchParams({ query: inputRef.current.value })
	const projectUrl = `https://jisigtwwxceaauhsoksi.supabase.co`
	const queryURL = `${projectUrl}/${query}`
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
  
  return (
    <>
	  <input 
        placeholder="Ask a question" onClick={() => setOpen(true)} type="text" ref={inputRef}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={answerQuestion} className="nx-flex nx-gap-3">
	  <input
	    placeholder="Ask a question"
	    type="text"
	    value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
	  <button type="submit">					
	    Ask
	  </button>

	  {isLoading ? 'Loading...' : answer}
        </form>
      </Modal>
    </>
  );
}

export { Search }
