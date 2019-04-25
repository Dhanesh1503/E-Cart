/* Home-test.js
 * Test Cases related to Home section.
 * @Author: Dhanesh Pant
 */
'use strict';

let assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
let React = require('react');
let skinDeep = require('skin-deep');
let ReactTestUtils = require('react-addons-test-utils');
import Home from '../app/components/Home'

describe('Home related test cases :', function() {

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

  }

  const selectBusinessUnit = function(e){
    selectBusinessUnit:(result) => {
    let selectedBusinessUnit = result;
    dispatch(selectBusinessType(selectedBusinessUnit))}
  };

  var tree = skinDeep.shallowRender(<Home {...this.props} appState={appState} selectBusinessUnit={selectBusinessUnit} />);
  var instance = tree.getMountedInstance();
   
  it('Should contain five links :Clothing & Accessories,Beauty Health & Gourmet,Sports Fitness & Outdoors,Handbags & Luggage,Home & Kitchen Appliances   Home link ,Selected Business Unit and selected business structure', function() {
     var link=tree.everySubTree('Link');
     expect(link.length).to.eql(5);
  });

  it('Should contain two buttons:Login and Sign-Up', function() {
     var Buttons=tree.everySubTree('button');
     expect(Buttons.length).to.eql(2);
  });

  it('Should contain two container div:', function() {
     var containerDiv=tree.everySubTree('.home-col');
     expect(containerDiv.length).to.eql(2);
  });

  it('Should contain one form for login:', function() {
     var loginForm=tree.everySubTree('form');
     expect(loginForm.length).to.eql(1);
  });

  it('Should have a function : disableLogin', function () { 
      expect(instance.disableLogin).to.be.a('function');
  });

  it('Should have a function : navigate', function () { 
      expect(instance.navigate).to.be.a('function');
  });

  it('Should contain two Row:', function() {
     var row=tree.everySubTree('Row');
     expect(row.length).to.eql(2);
  });

  it('Should contain six Col:', function() {
     var col=tree.everySubTree('Col');
     expect(col.length).to.eql(6);
  });

  it('Should contain two FormGroup Element:', function() {
     var formGroup=tree.everySubTree('FormGroup');
     expect(formGroup.length).to.eql(2);
  });

  it('Should contain a four Line Break <br> elments :', function() {
     var brElements=tree.everySubTree('br');
     expect(brElements.length).to.eql(4);
  });

  it('Should contain a h2 element containing text:Welcome Back To E-Cart..!', function() {
     var pageTitle=tree.everySubTree('h2');
     expect(pageTitle.length).to.eql(1);
  });

  it('Should contain a h3 element containing text:Sign-in/Register to E-Cart', function() {
     var subTitle=tree.everySubTree('h3');
     expect(subTitle.length).to.eql(1);
  });

  it('Should contain a one Header :', function() {
     var header=tree.everySubTree('header');
     expect(header.length).to.eql(1);
  });

});