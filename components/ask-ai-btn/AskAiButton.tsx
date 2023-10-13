import React from 'react';
import Image from 'next/image';
import botLogo from './bot-logo.svg';
import styles from './AskAiButton.module.css';

const AskAiButton = () => {

    const openThreadoAIWidgetModal = (): void => {
        (window as any)._hw && (window as any)._hw('modal-event', 'open');
    };
    
    return (
        <>
            <button
                className={styles.button}
                onClick={openThreadoAIWidgetModal}
                aria-current="false"
            >
                <Image alt="bot" src={botLogo} height={18} width={18} />
                <span className={styles.text}>Ask AI Bot</span>  {/* Wrap text with a span and assign a class */}
            </button>
        </>
    );
}

export { AskAiButton }