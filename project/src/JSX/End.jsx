import React from 'react';
import fireWork from "../assets/fireworks.gif"; // Ensure this path is correct and the file exists

const End = () => {
    return (
        <div style={{
            margin: "auto",
            fontSize: "1.5rem",
            background: "#F03A3A",
            color: "white",
            padding: "40px 60px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "700px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
            animation: "fadeIn 1s ease-in-out"
        }}>
            <img 
                src={fireWork} 
                alt="Firework" 
                style={{ 
                    width: "100%", 
                    maxWidth: "500px", 
                    marginBottom: "30px", 
                    borderRadius: "20px", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)" 
                }} 
            />
            <h1 style={{
                marginBottom: "20px",
                fontSize: "2.5rem",
                fontWeight: "bold",
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)"
            }}>
                Thank You for Playing!
            </h1>
            <p style={{
                fontSize: "1.3rem",
                lineHeight: "1.8",
                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)",
                maxWidth: "600px"
            }}>
                We hope you enjoyed the game. See you next time!
            </p>
        </div>
    );
};

export default End;