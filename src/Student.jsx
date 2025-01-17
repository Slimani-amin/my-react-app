import PropTypes from 'prop-types'


Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool

}

function Student(propos){
    return (
        <div className="student">
            <p>Name: {propos.name}</p>
            <p>Age: {propos.age}</p>
            <p>Student: {propos.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student;