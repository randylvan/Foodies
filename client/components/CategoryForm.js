import React from 'react';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }

    // componentDidMount() {
    //     $.ajax({
    //     url: '/api/categories',
    //     type: 'GET',
    //     dataType: 'JSON'
    //     }).done( categories => {
    //     this.setState({ categories });
    //     });
    // }

    onAdd = () => {
        return;
    }
    
    render() {
        let inputName;
        let inputDesc;
        
        return (
            <div>
                <form 
                className="center"
                onSubmit={ e => {
                    e.preventDefault();
                    onAdd(input.value);
                    input.value = null;
                }}
                >
                    <input 
                        ref={ n => inputName = n }
                        placeholder="Enter Category Name"
                    />
                    <input 
                        ref={ n => inputDesc = n }
                        placeholder="Category Description"
                    />
                </form>
            </div>
        )
    }
}

export default CategoryForm;