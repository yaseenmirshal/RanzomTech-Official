export default function ThankYouPopup({ isVisible, onClose }) {
    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        }}>
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '40px',
                maxWidth: '500px',
                width: '90%',
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                animation: 'slideInUp 0.3s ease-out',
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 30px',
                    backgroundColor: '#E3FF04',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '40px',
                }}>
                    ✓
                </div>
                <h2 style={{
                    color: '#333',
                    marginBottom: '15px',
                    fontSize: '28px',
                    fontWeight: '600',
                }}>
                    Thank You!
                </h2>
                <p style={{
                    color: '#666',
                    marginBottom: '30px',
                    fontSize: '16px',
                    lineHeight: '1.6',
                }}>
                    Your message has been sent successfully. We appreciate you contacting RanzomTech and will get back to you as soon as possible.
                </p>
                <button
                    onClick={onClose}
                    style={{
                        backgroundColor: '#E3FF04',
                        color: '#000',
                        border: 'none',
                        padding: '12px 40px',
                        fontSize: '16px',
                        fontWeight: '600',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#d4e804';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#E3FF04';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    Close
                </button>
            </div>
            <style>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
