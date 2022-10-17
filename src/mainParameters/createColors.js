

export function createColors() {

    class Color {
        constructor(body, header, loop, name) {
            this.name = name;
            this.body = body;
            this.header = header;
            this.loop = loop;

        }
    }

    let array = [];

    array.push(new Color('#5feb76', '#3a8d47', '#579e63', 'Green'));
    array.push(new Color('#cc00cc', '#660066', '#990099', 'Purple'));
    array.push(new Color('#0000ff', '#000066', '#0000b3', 'Blue'));
    array.push(new Color('#ff3300', '#801a00', '#cc2900', 'Red'));
    array.push(new Color('#ffff00', '#999900', '#e6e600', 'Yellow'));
    array.push(new Color('#ff8000', '#994d00', '#ff9933', 'Orange'));

    return array;

}

