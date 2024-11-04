import React, { useState } from 'react';
import CommentSection from './CommentSections';

const DishList = () => {
    const dishes = [
        { id: 1, name: 'Feijoada', description: 'Tradicional prato brasileiro com feijão preto e carne.' },
        { id: 2, name: 'Moqueca', description: 'Ensopado de peixe com leite de coco e dendê.' },
        { id: 3, name: 'Pão de Queijo', description: 'Deliciosos pães de queijo mineiros.' },
    ];

    const [showComments, setShowComments] = useState(null);

    const toggleComments = (id) => {
        setShowComments(showComments === id ? null : id);
    };

    return (
        <div className="dish-list">
            <h2>Pratos Disponíveis</h2>
            <ul>
                {dishes.map(dish => (
                    <li key={dish.id}>
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                        <button onClick={() => toggleComments(dish.id)}>
                            {showComments === dish.id ? 'Fechar comentários' : 'Comentar'}
                        </button>
                        {showComments === dish.id && <CommentSection dishId={dish.id} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DishList;
