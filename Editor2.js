import React, {useState} from 'react';
import Draggable from 'react-draggable';
import '../assets/Setting/ImageBox.css'
function Editor2(props) {
    const [activedrag, setActiveDrag] = useState(0)
    const [deltaPosition, setDeltaPosition] = useState({x: 0, y: 0})
    const [controlledPosition1, setControlledPosition1] = useState({x: 10, y: 50, active:0})
    const [controlledPosition2, setControlledPosition2] = useState({x: 240, y: 50, active:0})
    const [controlledPosition3, setControlledPosition3] = useState({x: 470, y: 50, active:0})
    const [controlledPosition4, setControlledPosition4] = useState({x: 10, y: 350, active:0})
    const [controlledPosition5, setControlledPosition5] = useState({x: 240, y: 350, active:0})
    const [controlledPosition6, setControlledPosition6] = useState({x: 470, y: 350, active:0})
    const [center1, center2, center3, center4, center5, center6] =
     [{x:110, y:150}, {x:340,y:150},{x:570,y:150},{x:110,y:450},{x:340,y:450},{x:570,y:450}]
    const initial_positions = [{x:10, y:50}, {x:240,y:50},{x:470,y:50},{x:10,y:350},{x:240,y:350},{x:470,y:350}]
    const handleDrag = (e, ui) => {
        const {x, y} = deltaPosition;
        setDeltaPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        );
      };
  
    const onStart1 = () => {
        setActiveDrag(1)
        setControlledPosition1({...controlledPosition1, active:1})
      };

    const onStart2 = () => {
      setActiveDrag(1)
      setControlledPosition2({...controlledPosition2, active:1})
    };

    const onStart3 = () => {
      setActiveDrag(1)
      setControlledPosition3({...controlledPosition3, active:1})
    };

    const onStart4 = () => {
      setActiveDrag(1)
      setControlledPosition4({...controlledPosition4, active:1})
    };

    const onStart5 = () => {
      setActiveDrag(1)
      setControlledPosition5({...controlledPosition5, active:1})
    };

    const onStart6 = () => {
      setActiveDrag(1)
      setControlledPosition6({...controlledPosition6, active:1})
    };
  
    const onStop = () => {
      //--activedrag
        setActiveDrag(0);
        setControlledPosition1({...controlledPosition1, active:0})
        setControlledPosition2({...controlledPosition2, active:0})
        setControlledPosition3({...controlledPosition3, active:0})
        setControlledPosition4({...controlledPosition4, active:0})
        setControlledPosition5({...controlledPosition5, active:0})
        setControlledPosition6({...controlledPosition6, active:0})


      };

    const distance_caluculator = (x, y) => {
      const center = {center_x:x + 100, center_y:y+100}
        const distance1 = Math.abs(center.center_x ** 2 + center.center_y ** 2 - center1.x ** 2 - center1.y ** 2)
        const distance2 = Math.abs(center.center_x ** 2 + center.center_y ** 2 - center2.x ** 2 - center2.y ** 2)
        const distance3 = Math.abs(center.center_x ** 2 + center.center_y ** 2 - center3.x ** 2 - center3.y ** 2)
        const distance4 = Math.abs(center.center_x ** 2 + center.center_y ** 2 - center4.x ** 2 - center4.y ** 2)
        const distance5 = Math.abs(center.center_x ** 2 + center.center_y ** 2 - center5.x ** 2 - center5.y ** 2)
        const distance6 = Math.abs(center.center_x ** 2 + center.center_y ** 2 - center6.x ** 2 - center6.y ** 2)
        const distances = [distance1, distance2, distance3, distance4, distance5, distance6]
        const min = Math.min(...distances)
        const min_index = distances.indexOf(min)
        const nearest_position = initial_positions[min_index]
        return nearest_position
    }

    
    
    const onControlledDrag1 = (e, position) => {
        const {x, y} = position;
        const nearest_position = distance_caluculator(x, y)
        
        setControlledPosition1({x:nearest_position.x, y:nearest_position.y, active:1});
      };

    const onControlledDrag2 = (e, position) => {
      const {x, y} = position;
      const nearest_position = distance_caluculator(x, y)
      setControlledPosition2({x:nearest_position.x, y:nearest_position.y, active:1});
    };

    const onControlledDrag3 = (e, position) => {
      const {x, y} = position;
      const nearest_position = distance_caluculator(x, y)
      setControlledPosition3({x:nearest_position.x, y:nearest_position.y, active:1});
    };
    const onControlledDrag4 = (e, position) => {
      const {x, y} = position;
      const nearest_position = distance_caluculator(x, y)
      setControlledPosition4({x:nearest_position.x, y:nearest_position.y, active:1});
    };
    const onControlledDrag5 = (e, position) => {
      const {x, y} = position;
      const nearest_position = distance_caluculator(x, y)
      setControlledPosition5({x:nearest_position.x, y:nearest_position.y, active:1});
    };

    const onControlledDrag6 = (e, position) => {
      const {x, y} = position;
      const nearest_position = distance_caluculator(x, y)
      setControlledPosition6({x:nearest_position.x, y:nearest_position.y, active:1});
    };
    
    const onControlledDragStop = (e, position) => {
        onControlledDrag1(e, position);
        onStop();
      };

    return (
        <div className='images_box'>
            <Draggable bounds="parent" position={controlledPosition1} onDrag={onControlledDrag1} onStart={onStart1} onStop={onStop}>
              <div className="box" style={{backgroundColor:'orange'}} id={controlledPosition1.active === 1?'cur_box':''}>
                I can only be moved within my offsetParent.
              </div>
            </Draggable>
            <Draggable bounds="parent" position={controlledPosition2} onDrag={onControlledDrag2} onStart={onStart2} onStop={onStop}>
              <div className="box" style={{backgroundColor:'purple'}} id={controlledPosition2.active === 1?'cur_box':''}>
                I can only be moved within my offsetParent.
              </div>
            </Draggable>
            <Draggable bounds="parent" position={controlledPosition3} onDrag={onControlledDrag3} onStart={onStart3} onStop={onStop}>
              <div className="box" style={{backgroundColor:'green'}} id={controlledPosition3.active === 1?'cur_box':''}>
                I can only be moved within my offsetParent.
              </div>
            </Draggable>
            <Draggable bounds="parent" position={controlledPosition4} onDrag={onControlledDrag4} onStart={onStart4} onStop={onStop}>
              <div className="box" style={{backgroundColor:'skyblue'}} id={controlledPosition4.active === 1?'cur_box':''}>
                I can only be moved within my offsetParent.
              </div>
            </Draggable>
            <Draggable bounds="parent" position={controlledPosition5} onDrag={onControlledDrag5} onStart={onStart5} onStop={onStop}>
              <div className="box" style={{backgroundColor:'yellow'}} id={controlledPosition5.active === 1?'cur_box':''}>
                I can only be moved within my offsetParent.
              </div>
            </Draggable>
            <Draggable bounds="parent" position={controlledPosition6} onDrag={onControlledDrag6} onStart={onStart6} onStop={onStop}>
              <div className="box" style={{backgroundColor:'pink'}} id={controlledPosition6.active === 1?'cur_box':''}>
                I can only be moved within my offsetParent.
              </div>
            </Draggable>
        </div>
    );
}

export default Editor2;


// const adjustXPos = (e) => {
//   e.preventDefault();
//   e.stopPropagation();
//   const {x, y} = controlledPosition1;
//   setControlledPosition1({x: x - 10, y});
// };

// const adjustYPos = (e) => {
//   e.preventDefault();
//   e.stopPropagation();
//   const {x, y} = controlledPosition1;
//   setControlledPosition1({x, y: y - 10});
// };