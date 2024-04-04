export function summaryAuthors(authorList: string[]) {
  if (authorList.length === 1) return authorList[0];
  return `${authorList} 외 ${authorList.length - 1}인`;
}
