import React, {useState} from 'react';
import Alert from '../components/Alert';

function Upload() {
    const [selectedFile, setSelectedFile] = useState();
    const [previewSource, setPreviewSource] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

	const changeHandler = (event) => {
        const file = event.target.files[0];
        previewFile(file);
        setSelectedFile(file);
	};
    const handleSubmission = () => {
        const formData = new FormData();
		formData.append('file', selectedFile);
        fetch(
			'/',
			{
				method: 'POST',
				body: formData,
			}
		)
        .then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
                setPreviewSource('');
                setSuccessMsg('Image uploaded successfully');
		})
        .catch((error) => {
            console.error(error);
            setErrMsg('Something went wrong!');
        });

    };
    return (
        <div>
            <h1 className="title">Upload an Image</h1>
            <Alert msg={errMsg} type="danger" />
            <Alert msg={successMsg} type="success" />
            <form onSubmit={handleSubmission} className="form">
                <input type="file" name="file" onChange={changeHandler} />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    )
}

export default Upload