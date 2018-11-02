/* Footer.js
 * Component for Footer section.
 * @Author: Dhanesh Pant
 * @Since: 8-Oct-2016  
 */
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span id="footer-text-wrap">
        ECart <span className="copyright">© 2016</span> 
        </span>
      </footer>
    );
  }
}
