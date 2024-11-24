import React, { useState } from "react";
import '../css/main.css';

function UserProfile() {
    // État initial pour les données utilisateur fictives
    const [newUsername, setNewUsername] = useState('JohnDoe');
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [isEditing, setIsEditing] = useState(false); 
    const [errorMessage, setErrorMessage] = useState('');

    // Fonction pour soumettre les modifications (ici sans backend)
    const handleSubmit = (event) => {
        event.preventDefault();
        // Simuler une validation ou sauvegarde des données locales
        setIsEditing(false); // On quitte le mode édition
    };

    // Fonction pour activer le mode édition
    const handleEdit = () => {
        setIsEditing(true); // On passe en mode édition
    };
    
    // Fonction pour annuler l'édition
    const handleCancel = () => {
        setIsEditing(false); // On quitte le mode édition
        setNewUsername('JohnDoe'); // On remet l'ancien nom d'utilisateur
    };

    return (
        <div className="user-profile">
            <form onSubmit={handleSubmit} className="profile-form">
                <label>
                    User Name :
                    <input 
                        type="text"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)} // Mettre à jour le nom d'utilisateur localement
                        disabled={!isEditing} 
                    />
                </label>
                <div>
                    <label>
                        First Name :
                        <input className="read-input"
                            type="text"
                            value={firstName}
                            disabled
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name :
                        <input className="read-input"
                            type="text"
                            value={lastName}
                            disabled
                        />
                    </label>
                </div>
                <div className="button-container">
                    {isEditing ? (
                        <>
                            <button className="edit-button" type="submit">Save</button>
                            <button className="edit-button" type="button" onClick={handleCancel}>Cancel</button>
                        </>
                    ) : (
                        <div className="button-container2"> 
                            <button className="edit-button" type="button" onClick={handleEdit}>Edit</button>
                        </div>
                    )}
                </div>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default UserProfile;
