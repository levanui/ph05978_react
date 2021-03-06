import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import firebase from './../../../../../firebase'
const AddCategory = ({onAddC}) => {
    const { register, errors, handleSubmit } = useForm()
    const onhandleSubmit = (data) => {
        let file = data.image[0];
        // tạo folder chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        let uploadTask = storageRef.put(file);
        // thực hiện việc đầy ảnh lên firebase
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);
        // lấy ảnh từ Firebase
        firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {
            // Tạo object mới chứa toàn bộ thông tin từ input
            const newData = {
                id: Math.random().toString(36).substr(2, 9),
                ...data,
                image: url
            }
            // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
            onAddC(newData)
           
        })
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit(onhandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Name</label>
                    <input className="form-control" type="text" ref={register} name="name"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="productName">Desc</label>
                    <input className="form-control" type="text" ref={register} name="desc"></input>
                </div>
                <div className="form-group">
                    <div className="custom-file">

                        <input type="file" className="custom-file-input" id="inputGroupFile02" name="image" ref={register}/>
                        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">chon anh</label>
                    </div>
                   
                </div>
                <button type="submit" className="btn btn-primary">Thêm danh muc</button>
            </form>
        </div>
    )
}

AddCategory.propTypes = {

}

export default AddCategory
