// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

    render() {
        const catsPics = this.props.catPics.map((catPic) => (<img src={catPic.url}></img>))

        return (
        <div>
        {catsPics}
        </div>
        )
    }
}

export default CatList