import React from 'react';
import Image from 'next/image';
import botLogo from './bot-logo.svg';

const AskAiButton = () => {

    const openThreadoAIWidgetModal = (): void => {
        (window as any)._hw && (window as any)._hw('modal-event', 'open');
    };
    
    return (
        <><button
        style={{
            background: 'linear-gradient(to right, #39f508, #dab204)',
            borderRadius: '25px',
            color: '#191919',
            fontWeight: 600,
            margin: '0 10px',
            display: 'flex',
            gap: '5px',
            padding: '5px 10px',
        }} 
        onClick={openThreadoAIWidgetModal} aria-current="false">
            <Image alt="bot" style={{ marginTop: '2px' }} src={botLogo} height={18} width={18} />
            Ask AI Bot
        </button>
        </>
    );
}

export { AskAiButton }