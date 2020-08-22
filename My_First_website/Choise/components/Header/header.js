class Header {
render() {
    const html = `
    <div class="header">
    <div class="header__cont">
    📦 2
    </div>
    </div>
    `;

    ROOT_HEADER.innerHTNL = html;
};
}
const headerPage = new Header();
headerPage.render();