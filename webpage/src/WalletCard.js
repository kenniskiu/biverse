import React, {useState,useEffect} from 'react'
import {ethers} from 'ethers'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const axios = require('axios');

const WalletCard = () => {
	let navigate = useNavigate()
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const [disable,setDisable] = useState(false);
	const axios = require('axios');

	function redirectToValidation(permitted, account_id){
		if(permitted){
			navigate(`validation/${account_id}`)
			}
		else{
			console.log("not permitted")
		}
	}
	useEffect(()=>{
		console.log('asdadsad')
		const user = Cookies.get("userID")
		if(user){
			setDisable(true)
			setConnButtonText('Wallet Connected');
		}
	},[])
	function cookieIsEmpty(){
		const user = Cookies.get("userID")
		if(!user){
			connectWalletHandler()
		}
		else{
		}
	}
	function addToDB(account_id,account_balance){
		axios({
			method: 'post',
			url: `http://localhost:3001/users/store`,
			data: { 
        		id : account_id,
				balance: account_balance
      		}
		}).then((response) => {
			console.log(response)
		}).catch(function (error){
			console.log(error)
		})
	}
	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			window.ethereum.request({ 
				method: 'eth_requestAccounts'
			}).then(result => {
				accountChangedHandler(result[0]);
				redirectToValidation(true, result[0]);
				addToDB(result[0],userBalance);
			}).catch(error => {
				setErrorMessage(error.message);
			});
			
		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
	    }
    }
	// update account, will cause component re-render
	function accountChangedHandler(newAccount){
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};
	const chainChangedHandler = () => {
		window.location.reload();
	} 
	
	return (
		<div>
		    <Button variant="light" size="sm" 
				disabled={disable}
				onClick={()=>{
					cookieIsEmpty();	
				}}>
				<span className="grey">{connButtonText}</span>
			</Button>
		</div>
	);
}

export default WalletCard;