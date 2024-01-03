

export const Droppable = () => {

    const {setNodeRef} = 
    useDroppable({id: 'droppable'});

    return (
        <div ref={setNodeRef}></div>
    );

export default Droppable;


