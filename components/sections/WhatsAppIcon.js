'use client'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppIcon() {
    const whatsappNumber = '919544534677' // Replace with your WhatsApp number
    const whatsappMessage = 'Hello, I need assistance!'
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    return (
        <div className="whatsapp-wrapper">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
                <FaWhatsapp size={52} />
            </a>

            <style jsx>{`
                .whatsapp-wrapper {
                    position: fixed;
                    bottom: 20px;
                    left: 20px;
                    z-index: 999;
                }

                .whatsapp-icon {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                    
                    border-radius: 50%;
                    color: white;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .whatsapp-icon:hover {
                    
                    color: #20ba5f;
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
                    transform: scale(1.1);
                }

                @media (max-width: 768px) {
                    .whatsapp-wrapper {
                        bottom: 15px;
                        left: 15px;
                    }

                    .whatsapp-icon {
                        width: 65px;
                        height: 65px;
                    }
                }
            `}</style>
        </div>
    )
}
