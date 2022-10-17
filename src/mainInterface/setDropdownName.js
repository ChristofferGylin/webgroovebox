export function setDropdownName(name) {

    let returnObject = {

        name: '',
        title: ''

    }

    let newName = '';
    let title = ``;

    if (name.length > 16) {

        title = name;

        for (let i = 0; i < 12; i++) {

            newName += name.charAt(i);

        }

        newName += '...';
        returnObject.name = newName;
        returnObject.title = title;

    } else {

        returnObject.name = name;

    }

    return returnObject;

}