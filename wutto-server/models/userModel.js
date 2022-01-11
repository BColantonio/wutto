const user = require('./db/schemas/user');

const newUser = mongoose.model('User', user.userSchema);

public createNewUser = (
    _firstName, 
    _lastName, 
    _email,
    _phone
) => {
    return new newUser({
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
        phoneNo: _phone        
    });
}

export createNewUser = createNewUser;