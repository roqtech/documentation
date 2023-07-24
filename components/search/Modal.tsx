import { useTheme } from 'nextra-theme-docs'

const Modal = ({ children, open, onClose }) => {
	const theme = useTheme();
	if (!open) return null;
	return (
		<div
		  style={{
		    position: 'fixed',
		    top: 0,
		    left: 0,
		    right: 0,
		    bottom: 0,
		    backgroundColor: 'rgba(0,0,0,0.5)',
		    zIndex: 100,
		   }}
		  onClick={onClose}>			
		  <div
		    style={{
		      position: 'absolute',
		      top: '50%',
		      left: '50%',
		      transform: 'translate(-50%, -50%)',
		      backgroundColor: theme.resolvedTheme === 'dark' ? '#1a1a1a' : 'white',
		      padding: 20,
		      borderRadius: 5,
		      width: '80%',
		      maxWidth: 700,
		      maxHeight: '80%',
		      overflow: 'auto',
		    }}
		    onClick={(e) => e.stopPropagation()}>			
		      {children}
		  </div>
	      </div>
	);
};

export { Modal }