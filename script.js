// Function to handle user input
    function handleInput() {
        const inputName = document.getElementById('searchInput').value.toLowerCase();
        const outputDiv = document.getElementById('output');

        switch (inputName) {
            case 'pranto':
                outputDiv.textContent = 'Pranto is your Friend!.';
                break;
            case 'eva':
                outputDiv.textContent = 'Eva is a good learner!.';
                break;
			case 'nirob':
                outputDiv.textContent = 'Nirob is a lawyer!.';
                break;
			case 'hridoy':
                outputDiv.textContent = 'Hridoy is a very Good Boy!. you are a great person.!';
                break;	
			case 'shorgo':
                outputDiv.textContent = 'Shorgo is your brother!.';
                break;	
			case 'linkon':
			outputDiv.textContent = 'Your name is a good spelling, Lincoln. লিংকন সিটি ওরেগনের কেন্দ্রীয় উপকূলে অবস্থিত একটি শহর। ডি রিভার স্টেট রিক্রিয়েশন সাইটে, ছোট ডি নদী ডেভিলস লেককে একটি বালুকাময় প্যাসিফিক সমুদ্র সৈকতের সাথে সংযুক্ত করেছে। ডেভিলস লেক স্টেট রিক্রিয়েশন এরিয়াতে ট্রেইল এবং ক্যাম্পগ্রাউন্ড আছে। নর্থ লিংকন কাউন্টি হিস্টোরিক্যাল মিউজিয়ামে জাপানি গ্লাস ফিশিং ফ্লোটের সংগ্রহ একটি হাইলাইট। রোডস এন্ড স্টেট রিক্রিয়েশন সাইটে জোয়ারের পুল, দ্বীপ এবং একটি লুকানো খাঁটি রয়েছে। ― Google ! have a nice day';
                break;	
			case 'pavel':
                outputDiv.textContent = 'পাভেল হলেন ক্রিপ্টো বাবা!.';
                break;	
			case 'sabbir':
                outputDiv.textContent = 'ছোট্ট নবাব!.';
                break;	
			case 'shourov':
                outputDiv.textContent = 'shourov is now married!. have a nice day';
                break;	
			case 'rafi':
                outputDiv.textContent = 'Rafi is a good student!.';
                break;
            case 'cadni':
                outputDiv.textContent = 'Facebook Friend !.';
                break;
             case 'rakib':
                outputDiv.textContent = 'আসসালামু আলাইকুম !.';
                break;
            case 'samiya':
                outputDiv.textContent = 'Facebook Friend !!.';
                break;
			case 'shadon':
                outputDiv.textContent = 'Good Boy!.';
                break;	
			case 'shahana':
                outputDiv.textContent = 'Facebook Friend !!.';
                break;	
			case 'mim':
                outputDiv.textContent = 'Facebook Friend !!.';
                break;	
               case 'anjona':
                outputDiv.textContent = 'Facebook Friend !!.';
                break;
		case 'israt':
                outputDiv.textContent = 'Fk id !!.';
                break;
		case 'israt jahan':
                outputDiv.textContent = 'Fk id !!.';
                break;
            case 'ritu':
                outputDiv.textContent = 'Fk id !!.';
                break;
            case 'shouvo ':
                outputDiv.textContent = 'Good Boy !!.';
                break;
            case 'Sathi':
                outputDiv.textContent = 'Sathi is your Friend !!.';
                break;
             case 'joy':
                outputDiv.textContent = 'Joy is a Good student !!.';
                break;




			
            default:
                outputDiv.textContent = 'Have a nice day!.';	
        }
    }

    // Event listener for Enter key
    document.getElementById('searchInput').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleInput();
        }
    });