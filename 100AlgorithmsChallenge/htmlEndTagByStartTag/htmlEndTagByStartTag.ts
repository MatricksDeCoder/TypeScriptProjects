function htmlEndTagByStartTag(startTag: string): string {
    let result = startTag.split(" ")[0].replace("<", "</");
    return result.endsWith(">")?result:result+">";
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));//</button>
console.log(htmlEndTagByStartTag('<i>'))//</i>