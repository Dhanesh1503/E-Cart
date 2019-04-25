/* SignUpForm-test.js
 * Test Cases related to Sign-Up section.
 * @Author: Dhanesh Pant
 */
'use strict';

let assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
let React = require('react');
let skinDeep = require('skin-deep');
let ReactTestUtils = require('react-addons-test-utils');
import SignUpForm from '../app/components/SignUpForm'

describe('Sign-Up form related test cases :', function() {

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
    

  var tree = skinDeep.shallowRender(<SignUpForm {...this.props} appState={appState} onNewUserSignUp={this.onNewUserSignUp} />);
  var instance = tree.getMountedInstance();
   
  it('Should contain one container div:', function() {
     var containerDiv=tree.everySubTree('.sign-up-container');
     expect(containerDiv.length).to.eql(1);
  });

  it('Should contain one form for sign-Up:', function() {
     var signUpForm=tree.everySubTree('form');
     expect(signUpForm.length).to.eql(1);
  });

  it('Should have a function : submitForm', function () { 
      expect(instance.submitForm).to.be.a('function');
  });

  it('Should contain one Row:', function() {
     var row=tree.everySubTree('Row');
     expect(row.length).to.eql(1);
  });

  it('Should contain one Col:', function() {
     var col=tree.everySubTree('Col');
     expect(col.length).to.eql(1);
  });

  it('Should contain three FormGroup Element:', function() {
     var formGroup=tree.everySubTree('FormGroup');
     expect(formGroup.length).to.eql(3);
  });

  it('Should contain one textArea Element:', function() {
     var textArea=tree.everySubTree('textarea');
     expect(textArea.length).to.eql(1);
  });

  it('Should contain a six Line Break <br> elments :', function() {
     var brElements=tree.everySubTree('br');
     expect(brElements.length).to.eql(5);
  });

});