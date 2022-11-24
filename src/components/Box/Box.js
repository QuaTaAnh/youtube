import PropTypes from 'prop-types';

function Box({children}) {
    return ( children );
}

Box.propsTypes = {
    children: PropTypes.node.isRequired,
}

export default Box;