import React from "react";
import "./modal.scss";

function Header() {
  return null;
}

function Body() {
  return null;
}

function Footer() {
  return null;
}
class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { children } = this.props;
    const header = children.find((child) => child.type === Header);
    const body = children.find((child) => child.type === Body);
    const footer = children.find((child) => child.type === Footer);

    return (
      <div className="modal-custom" onClick={this.props.onClose}>
        <div
          className="modal-card"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-content-custom">
            <i className="fas fa-times" onClick={this.props.onClose}></i>
            <header className="modal-custom-header">
              {header ? header.props.children : null}
            </header>
            <main className="modal-custom-body">
              {body ? body.props.children : null}
            </main>
            <footer className="modal-custom-footer">
              {footer ? footer.props.children : null}
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
