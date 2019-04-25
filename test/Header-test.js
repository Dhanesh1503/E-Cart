/* Header-test.js
 * Test Cases related to Header section.
 * @Author: Dhanesh Pant
 */
'use strict';

let assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
let React = require('react');
let skinDeep = require('skin-deep');
let ReactTestUtils = require('react-addons-test-utils');
import Header from '../app/components/common/Header'
import configureStore from '../app/store/configureStore';

describe('Header related test cases :', function() {

  const appState={

     userName:'',
     userPassword:'',
     selectedBusinessUnit : {},
     newUserName:'',
     newUserEmail:'',
     newUserContact:'',
     newUserAddress:'',
     completeInfoOfCustomer:[],
     businessList : [
          {
            id : "clothing-accessories",
            name : "Clothing & Accessories",
          },
          {
            id : "beauty-health-gourmet",
            name : "Beauty, Health & Gourmet",
          },
          {
            id : "sports-fitness-outdoors",
            name : "Sports, Fitness & Outdoors",
          },
          {
            id : "handbags-Luggage",
            name : "Handbags & Luggage",
          },
          {
            id : "home-kitchen",
            name : "Home & Kitchen Appliances",
          }
      ]

  };

  let reduxState;
  const store = configureStore(reduxState);

  var tree = skinDeep.shallowRender(<Header {...this.props} appState={appState} store={store}/>);
  var instance = tree.getMountedInstance();
  

  it('Should contain a Header :', function() {
     var header=tree.everySubTree('Header');
     expect(header.length).to.eql(1);
  });

   it('Should not contain a div with text :E-Cart Online Shopping Zone', function() {
     var loadMoreText =tree.subTree(".logged-user-name");
     expect(loadMoreText).to.eql(false);
  });

  it('Should contain four links :Home, Men, Women, Kids', function() {
     var diveTree=tree.dive(['Header']);
     var link=diveTree.everySubTree('Link');
     expect(link.length).to.eql(4);
  });
  
  it('Should contain a container for header Images :', function() {
     var diveTree=tree.dive(['Header']);
     var imagesdiv=diveTree.everySubTree('.header-image');
     expect(imagesdiv.length).to.eql(1);
  });

  it('Should contain a four Images :', function() {
     var diveTree=tree.dive(['Header']);
     var images=diveTree.everySubTree('img');
     expect(images.length).to.eql(5);
  });

});

