import { Form } from "react-bootstrap"
import { TodoContext} from "./TodoContext";
import {useContext, useState} from 'react';


function EditForm  ({todoEdt}) {

    const id = todoEdt.id;

    const [description, setDescription] = useState(todoEdt.description);
    const [dueDate, setDueDate] = useState(todoEdt.dueDate);
    const [inProgress, setInProgress] = useState(todoEdt.inProgress);
    const [priority, setPriority] = useState(todoEdt.priority);


    const {updateTodo} = useContext(TodoContext);

    const updatedTodo = {id, description, dueDate, inProgress, priority}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTodo(id, updatedTodo)
    }



 return   (
     <div>
 <Form onSubmit={handleSubmit}>
				<div class="box_general padding_bottom">				
					<div class="form-group">
						<label>Description</label>
						<input class="form-control" type="text" name="description" value={description} onChange={(e)=> setDescription(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Due date</label>
						<input class="form-control" type="Date" name="dueDate" value={dueDate} onChange={(e)=> setDueDate(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>In Progress</label>
						<input class="form-control" type="text" name="inProgress" value={inProgress} onChange={(e)=> setInProgress(e.target.value)} required/>
					</div>
                 <div class="form-group">
						<label>Priority</label>
						<input class="form-control" type="text" name="priority" value={priority}  onChange={(e)=> setPriority(e.target.value)} required/>
					</div>

          <div class="form-group">
          <button class="btn_1 medium">Add Item</button>
					</div>

				</div></Form>
     </div>

 )

}
export default EditForm;