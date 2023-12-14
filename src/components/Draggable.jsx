import { useDraggable } from "@dnd-kit/core";

export const Draggable = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};
<<<<<<< HEAD
=======
    </div>
    );
}

export default Draggable;
>>>>>>> 5c29019c2fa3e62f2cba0f79542427808e44fe8d
