const request = require('request')
const cheerio = require('cheerio')

const test = () => {
  request(url, (error, response, body) => {
    if (error) return console.log(error)
body = `








<!DOCTYPE html>
<html>
<head>
	<title>C - Sum of product of pairs</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="Content-Language" content="ja">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<meta name="format-detection" content="telephone=no">
	<meta name="google-site-verification" content="nXGC_JxO0yoP1qBzMnYD_xgufO6leSLw1kyNo2HZltM" />

	
	<meta name="description" content="プログラミング初級者から上級者まで楽しめる、競技プログラミングコンテストサイト「AtCoder」。オンラインで毎週開催プログラミングコンテストを開催しています。競技プログラミングを用いて、客観的に自分のスキルを計ることのできるサービスです。">
	<meta name="author" content="AtCoder Inc.">

	<meta property="og:site_name" content="AtCoder">
	
	<meta property="og:title" content="C - Sum of product of pairs" />
	<meta property="og:description" content="プログラミング初級者から上級者まで楽しめる、競技プログラミングコンテストサイト「AtCoder」。オンラインで毎週開催プログラミングコンテストを開催しています。競技プログラミングを用いて、客観的に自分のスキルを計ることのできるサービスです。" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://atcoder.jp/contests/abc177/tasks/abc177_c" />
	<meta property="og:image" content="https://img.atcoder.jp/assets/atcoder.png" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@atcoder" />
	
	<meta property="twitter:title" content="C - Sum of product of pairs" />

	<link href="//fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" type="text/css">
	<link rel="stylesheet" type="text/css" href="//img.atcoder.jp/public/b8eb965/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="//img.atcoder.jp/public/b8eb965/css/base.css">
	<link rel="shortcut icon" type="image/png" href="//img.atcoder.jp/assets/favicon.png">
	<link rel="apple-touch-icon" href="//img.atcoder.jp/assets/atcoder.png">
	<script src="//img.atcoder.jp/public/b8eb965/js/lib/jquery-1.9.1.min.js"></script>
	<script src="//img.atcoder.jp/public/b8eb965/js/lib/bootstrap.min.js"></script>
	<script src="//img.atcoder.jp/public/b8eb965/js/cdn/js.cookie.min.js"></script>
	<script src="//img.atcoder.jp/public/b8eb965/js/cdn/moment.min.js"></script>
	<script src="//img.atcoder.jp/public/b8eb965/js/cdn/moment_js-ja.js"></script>
	<script>
		var LANG = "ja";
		var userScreenName = "zett";
		var csrfToken = "viP0ilkT545XtbNTw/QeLOED2ADd707K9RqbYYOuRX4="
	</script>
	<script src="//img.atcoder.jp/public/b8eb965/js/utils.js"></script>
	
	
		<script src="//img.atcoder.jp/public/b8eb965/js/contest.js"></script>
		<link href="//img.atcoder.jp/public/b8eb965/css/contest.css" rel="stylesheet" />
		<script>
			var contestScreenName = "abc177";
			var remainingText = "残り時間";
			var countDownText = "開始まであと";
			var startTime = moment("2020-08-29T21:00:00+09:00");
			var endTime = moment("2020-08-29T22:40:00+09:00");
		</script>
		<style></style>
	
	
		<script type="text/x-mathjax-config">MathJax.Hub.Config({messageStyle:"none",tex2jax:{skipTags:["script","noscript","style","textarea","code"],inlineMath:[['\\\\(','\\\\)']]},delayStartupUntil:"onload"});</script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_CHTML"></script>
		<script>$(function(){$('var').each(function(){$(this).html('\\\\('+$(this).html()+'\\\\)');});});</script>
	
	
		<link href="//img.atcoder.jp/public/b8eb965/css/cdn/select2.min.css" rel="stylesheet" />
		<link href="//img.atcoder.jp/public/b8eb965/css/cdn/select2-bootstrap.min.css" rel="stylesheet" />
		<script src="//img.atcoder.jp/public/b8eb965/js/lib/select2.min.js"></script>
	
	
		<link rel="stylesheet" href="//img.atcoder.jp/public/b8eb965/css/cdn/codemirror.min.css">
		<script src="//img.atcoder.jp/public/b8eb965/js/cdn/codemirror.min.js"></script>
		<script src="//img.atcoder.jp/public/b8eb965/js/codeMirror/merged.js"></script>
	
	
		<script src="//img.atcoder.jp/public/b8eb965/js/cdn/run_prettify.js"></script>
	
	
	
	
	
	
	
	
	
	
	<script src="//img.atcoder.jp/public/b8eb965/js/base.js"></script>
	<script src="//img.atcoder.jp/public/b8eb965/js/ga.js"></script>
</head>

<body>

<script type="text/javascript">
	var __pParams = __pParams || [];
	__pParams.push({client_id: '468', c_1: 'atcodercontest', c_2: 'ClientSite'});
</script>
<script type="text/javascript" src="https://cdn.d2-apps.net/js/tr.js" async></script>


<div id="modal-contest-start" class="modal fade" tabindex="-1" role="dialog">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title">コンテスト開始</h4>
			</div>
			<div class="modal-body">
				<p>AtCoder Beginner Contest 177が開始されました。</p>
			</div>
			<div class="modal-footer">
				
					<a class="btn btn-primary" href='/contests/abc177/tasks'>問題一覧ページへ移動</a>
				
			</div>
		</div>
	</div>
</div>
<div id="modal-contest-end" class="modal fade" tabindex="-1" role="dialog">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title">コンテスト終了</h4>
			</div>
			<div class="modal-body">
				<p>AtCoder Beginner Contest 177は終了しました。</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">閉じる</button>
			</div>
		</div>
	</div>
</div>
<div id="main-div" class="float-container">


	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
					<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="/home"></a>
			</div>
			<div class="collapse navbar-collapse" id="navbar-collapse">
				<ul class="nav navbar-nav">
				
					<li><a class="contest-title" href="/contests/abc177">AtCoder Beginner Contest 177</a></li>
				
				</ul>
				<ul class="nav navbar-nav navbar-right">
					
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
							<img src='//img.atcoder.jp/assets/top/img/flag-lang/ja.png'> 日本語 <span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li><a href="/contests/abc177/tasks/abc177_c?lang=ja"><img src='//img.atcoder.jp/assets/top/img/flag-lang/ja.png'> 日本語</a></li>
							<li><a href="/contests/abc177/tasks/abc177_c?lang=en"><img src='//img.atcoder.jp/assets/top/img/flag-lang/en.png'> English</a></li>
						</ul>
					</li>
					
					
						<li class="dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
								<span class="glyphicon glyphicon-cog" aria-hidden="true"></span> zett (Contestant) <span class="caret"></span>
							</a>
							<ul class="dropdown-menu">
								<li><a href="/users/zett"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> マイプロフィール</a></li>
								<li class="divider"></li>
								<li><a href="/settings"><span class="glyphicon glyphicon-wrench" aria-hidden="true"></span> 基本設定</a></li>
								<li><a href="/settings/icon"><span class="glyphicon glyphicon-picture" aria-hidden="true"></span> アイコン設定</a></li>
								<li><a href="/settings/password"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span> パスワードの変更</a></li>
								<li><a href="/settings/fav"><span class="glyphicon glyphicon-star" aria-hidden="true"></span> お気に入り管理</a></li>
								
								
								
								<li class="divider"></li>
								<li><a href="javascript:void(form_logout.submit())"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> ログアウト</a></li>
							</ul>
						</li>
					
				</ul>
			</div>
		</div>
	</nav>

	<form method="POST" name="form_logout" action="/logout?continue=https%3A%2F%2Fatcoder.jp%2Fcontests%2Fabc177%2Ftasks%2Fabc177_c">
		<input type="hidden" name="csrf_token" value="viP0ilkT545XtbNTw/QeLOED2ADd707K9RqbYYOuRX4=" />
	</form>
	<div id="main-container" class="container"
		 	style="padding-top:50px;">
		

<div class="row">
	<div id="contest-nav-tabs" class="col-sm-12 mb-2 cnvtb-fixed">
	<div>
		<small class="contest-duration">
			
				コンテスト時間:
				<a href='http://www.timeanddate.com/worldclock/fixedtime.html?iso=20200829T2100&p1=248' target='blank'><time class='fixtime fixtime-full'>2020-08-29 21:00:00+0900</time></a> ~ <a href='http://www.timeanddate.com/worldclock/fixedtime.html?iso=20200829T2240&p1=248' target='blank'><time class='fixtime fixtime-full'>2020-08-29 22:40:00+0900</time></a> 
				(100分)
			
		</small>
		<small class="back-to-home pull-right"><a href="/home">AtCoderホームへ戻る</a></small>
	</div>
	<ul class="nav nav-tabs">
		<li><a href="/contests/abc177"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> トップ</a></li>
		
			<li class="active"><a href="/contests/abc177/tasks"><span class="glyphicon glyphicon-tasks" aria-hidden="true"></span> 問題</a></li>
		

		
			<li><a href="/contests/abc177/clarifications"><span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> 質問 <span id="clar-badge" class="badge"></span></a></li>
		

		
			<li><a href="/contests/abc177/submit?taskScreenName=abc177_c"><span class="glyphicon glyphicon-send" aria-hidden="true"></span> 提出</a></li>
		

		
			<li>
				<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-list" aria-hidden="true"></span> 提出結果<span class="caret"></span></a>
				<ul class="dropdown-menu">
					
					
						<li><a href="/contests/abc177/submissions/me"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> 自分の提出</a></li>
						<li class="divider"></li>
						<li><a href="/contests/abc177/score"><span class="glyphicon glyphicon-dashboard" aria-hidden="true"></span> 自分の得点状況</a></li>
					
				</ul>
			</li>
		

		
			
				
					<li><a href="/contests/abc177/standings"><span class="glyphicon glyphicon-sort-by-attributes-alt" aria-hidden="true"></span> 順位表</a></li>
				
			
		

		
			<li><a href="/contests/abc177/custom_test"><span class="glyphicon glyphicon-wrench" aria-hidden="true"></span> コードテスト</a></li>
		

		
		

		<li class="pull-right"><a id="fix-cnvtb" href="javascript:void(0)"><span class="glyphicon glyphicon-pushpin" aria-hidden="true"></span></a></li>
	</ul>
</div>
	<div class="col-sm-12">
		<span class="h2">
			C - Sum of product of pairs
			
		</span>
		<span id="task-lang-btn" class="pull-right"><span data-lang="ja"><img src='//img.atcoder.jp/assets/top/img/flag-lang/ja.png'></span> / <span data-lang="en"><img src='//img.atcoder.jp/assets/top/img/flag-lang/en.png'></span></span>
		<script>
			$(function() {
				var ts = $('#task-statement span.lang');
				if (ts.children('span').size() <= 1) {
					$('#task-lang-btn').hide();
					ts.children('span').show();
					return;
				}
				var REMEMBER_LB = 5;
				var LS_KEY = 'task_lang';
				var taskLang = getLS(LS_KEY) || '';
				var changeTimes = 0;
				if (taskLang == 'ja' || taskLang == 'en') {
					changeTimes = REMEMBER_LB;
				} else {
					var changeTimes = parseInt(taskLang, 10);
					if (isNaN(changeTimes)) {
						changeTimes = 0;
						delLS(LS_KEY);
					}
					changeTimes++;
					taskLang = LANG;
				}
				ts.children('span.lang-' + taskLang).show();

				$('#task-lang-btn span').click(function() {
					var l = $(this).data('lang');
					ts.children('span').hide();
					ts.children('span.lang-' + l).show();
					if (changeTimes < REMEMBER_LB) setLS(LS_KEY, changeTimes);
					else setLS(LS_KEY, l);
				});
			});
		</script>
		<hr/>
		<p>
			実行時間制限: 2 sec / メモリ制限: 1024 MB
			
		</p>

		<div id="task-statement">
			
	<div class="alert alert-warning alert-dismissible fade in">
		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		<p>2020/08/29 22:40:00 まで、問題の内容・感想・解法などをSNS上に投稿することは<a href="/contests/abc177/rules" target="_blank">ルール</a>に違反する行為です。</p>
		<p>どのような投稿がルールに違反するかはこちらの<a href="/posts/262" target="_blank">記事</a>もお読みください。</p>
	</div>

			<span class="lang">
<span class="lang-ja">
<p>配点 : <var>300</var> 点</p>

<div class="part">
<section>
<h3>問題文</h3><p><var>N</var> 個の整数 <var>A_1,\\ldots,A_N</var> が与えられます。</p>
<p><var>1\\leq i &lt; j \\leq N</var> を満たす全ての組 <var>(i,j)</var> についての <var>A_i \\times A_j</var> の和を <var>\\bmod (10^9+7)</var> で求めてください。</p>
</section>
</div>

<div class="part">
<section>
<h3>制約</h3><ul>
<li><var>2 \\leq N \\leq 2\\times 10^5</var></li>
<li><var>0 \\leq A_i \\leq 10^9</var></li>
<li>入力は全て整数</li>
</ul>
</section>
</div>

<hr />
<div class="io-style">
<div class="part">
<section>
<h3>入力</h3><p>入力は以下の形式で標準入力から与えられる。</p>
<pre><var>N</var>
<var>A_1</var> <var>\\ldots</var> <var>A_N</var>
</pre>

</section>
</div>

<div class="part">
<section>
<h3>出力</h3><p><var>\\sum_{i=1}^{N-1}\\sum_{j=i+1}^{N} A_i A_j</var> を <var>\\bmod (10^9+7)</var> で出力せよ。</p>
</section>
</div>
</div>

<hr />
<div class="part">
<section>
<h3>入力例 1</h3><pre>3
1 2 3
</pre>

</section>
</div>

<div class="part">
<section>
<h3>出力例 1</h3><pre>11
</pre>

<p><var>1 \\times 2 + 1 \\times 3 + 2 \\times 3 = 11</var> です。</p>
</section>
</div>

<hr />
<div class="part">
<section>
<h3>入力例 2</h3><pre>4
141421356 17320508 22360679 244949
</pre>

</section>
</div>

<div class="part">
<section>
<h3>出力例 2</h3><pre>437235829
</pre></section>
</div>
</span>
<span class="lang-en">
<p>Score : <var>300</var> points</p>

<div class="part">
<section>
<h3>Problem Statement</h3><p>Given are <var>N</var> integers <var>A_1,\\ldots,A_N</var>.</p>
<p>Find the sum of <var>A_i \\times A_j</var> over all pairs <var>(i,j)</var> such that <var>1\\leq i &lt; j \\leq N</var>, modulo <var>(10^9+7)</var>.</p>
</section>
</div>

<div class="part">
<section>
<h3>Constraints</h3><ul>
<li><var>2 \\leq N \\leq 2\\times 10^5</var></li>
<li><var>0 \\leq A_i \\leq 10^9</var></li>
<li>All values in input are integers.</li>
</ul>
</section>
</div>

<hr />
<div class="io-style">
<div class="part">
<section>
<h3>Input</h3><p>Input is given from Standard Input in the following format:</p>
<pre><var>N</var>
<var>A_1</var> <var>\\ldots</var> <var>A_N</var>
</pre>

</section>
</div>

<div class="part">
<section>
<h3>Output</h3><p>Print <var>\\sum_{i=1}^{N-1}\\sum_{j=i+1}^{N} A_i A_j</var>, modulo <var>(10^9+7)</var>.</p>
</section>
</div>
</div>

<hr />
<div class="part">
<section>
<h3>Sample Input 1</h3><pre>3
1 2 3
</pre>

</section>
</div>

<div class="part">
<section>
<h3>Sample Output 1</h3><pre>11
</pre>

<p>We have <var>1 \\times 2 + 1 \\times 3 + 2 \\times 3 = 11</var>.</p>
</section>
</div>

<hr />
<div class="part">
<section>
<h3>Sample Input 2</h3><pre>4
141421356 17320508 22360679 244949
</pre>

</section>
</div>

<div class="part">
<section>
<h3>Sample Output 2</h3><pre>437235829
</pre></section>
</div>
</span>
</span>

		</div>

		

		
		<hr/>
		<form class="form-horizontal form-code-submit" action="/contests/abc177/submit" method="POST">
			<input type="hidden" name="data.TaskScreenName" value="abc177_c" />
			
			<div class="form-group ">
				<label class="control-label col-sm-2" for="select-lang">言語</label>
				<div id="select-lang" class="col-sm-5" data-name="data.LanguageId">
					<select class="form-control current" data-placeholder="-" name="data.LanguageId" required>
						<option></option>
						
							<option value="4001" data-mime="text/x-csrc">C (GCC 9.2.1)</option>
						
							<option value="4002" data-mime="text/x-csrc">C (Clang 10.0.0)</option>
						
							<option value="4003" data-mime="text/x-c&#43;&#43;src">C&#43;&#43; (GCC 9.2.1)</option>
						
							<option value="4004" data-mime="text/x-c&#43;&#43;src">C&#43;&#43; (Clang 10.0.0)</option>
						
							<option value="4005" data-mime="text/x-java">Java (OpenJDK 11.0.6)</option>
						
							<option value="4006" data-mime="text/x-python">Python (3.8.2)</option>
						
							<option value="4007" data-mime="text/x-sh">Bash (5.0.11)</option>
						
							<option value="4008" data-mime="text/x-bc">bc (1.07.1)</option>
						
							<option value="4009" data-mime="text/x-sh">Awk (GNU Awk 4.1.4)</option>
						
							<option value="4010" data-mime="text/x-csharp">C# (.NET Core 3.1.201)</option>
						
							<option value="4011" data-mime="text/x-csharp">C# (Mono-mcs 6.8.0.105)</option>
						
							<option value="4012" data-mime="text/x-csharp">C# (Mono-csc 3.5.0)</option>
						
							<option value="4013" data-mime="text/x-clojure">Clojure (1.10.1.536)</option>
						
							<option value="4014" data-mime="text/x-crystal">Crystal (0.33.0)</option>
						
							<option value="4015" data-mime="text/x-d">D (DMD 2.091.0)</option>
						
							<option value="4016" data-mime="text/x-d">D (GDC 9.2.1)</option>
						
							<option value="4017" data-mime="text/x-d">D (LDC 1.20.1)</option>
						
							<option value="4018" data-mime="application/dart">Dart (2.7.2)</option>
						
							<option value="4019" data-mime="text/x-dc">dc (1.4.1)</option>
						
							<option value="4020" data-mime="text/x-erlang">Erlang (22.3)</option>
						
							<option value="4021" data-mime="elixir">Elixir (1.10.2)</option>
						
							<option value="4022" data-mime="text/x-fsharp">F# (.NET Core 3.1.201)</option>
						
							<option value="4023" data-mime="text/x-fsharp">F# (Mono 10.2.3)</option>
						
							<option value="4024" data-mime="text/x-forth">Forth (gforth 0.7.3)</option>
						
							<option value="4025" data-mime="text/x-fortran">Fortran (GNU Fortran 9.2.1)</option>
						
							<option value="4026" data-mime="text/x-go">Go (1.14.1)</option>
						
							<option value="4027" data-mime="text/x-haskell">Haskell (GHC 8.8.3)</option>
						
							<option value="4028" data-mime="text/x-haxe">Haxe (4.0.3); js</option>
						
							<option value="4029" data-mime="text/x-haxe">Haxe (4.0.3); Java</option>
						
							<option value="4030" data-mime="text/javascript">JavaScript (Node.js 12.16.1)</option>
						
							<option value="4031" data-mime="text/x-julia">Julia (1.4.0)</option>
						
							<option value="4032" data-mime="text/x-kotlin">Kotlin (1.3.71)</option>
						
							<option value="4033" data-mime="text/x-lua">Lua (Lua 5.3.5)</option>
						
							<option value="4034" data-mime="text/x-lua">Lua (LuaJIT 2.1.0)</option>
						
							<option value="4035" data-mime="text/x-sh">Dash (0.5.8)</option>
						
							<option value="4036" data-mime="text/x-nim">Nim (1.0.6)</option>
						
							<option value="4037" data-mime="text/x-objectivec">Objective-C (Clang 10.0.0)</option>
						
							<option value="4038" data-mime="text/x-common-lisp">Common Lisp (SBCL 2.0.3)</option>
						
							<option value="4039" data-mime="text/x-ocaml">OCaml (4.10.0)</option>
						
							<option value="4040" data-mime="text/x-octave">Octave (5.2.0)</option>
						
							<option value="4041" data-mime="text/x-pascal">Pascal (FPC 3.0.4)</option>
						
							<option value="4042" data-mime="text/x-perl">Perl (5.26.1)</option>
						
							<option value="4043" data-mime="text/x-perl">Raku (Rakudo 2020.02.1)</option>
						
							<option value="4044" data-mime="text/x-php">PHP (7.4.4)</option>
						
							<option value="4045" data-mime="text/x-prolog">Prolog (SWI-Prolog 8.0.3)</option>
						
							<option value="4046" data-mime="text/x-python">PyPy2 (7.3.0)</option>
						
							<option value="4047" data-mime="text/x-python">PyPy3 (7.3.0)</option>
						
							<option value="4048" data-mime="text/x-racket">Racket (7.6)</option>
						
							<option value="4049" data-mime="text/x-ruby">Ruby (2.7.1)</option>
						
							<option value="4050" data-mime="text/x-rustsrc">Rust (1.42.0)</option>
						
							<option value="4051" data-mime="text/x-scala">Scala (2.13.1)</option>
						
							<option value="4052" data-mime="text/x-java">Java (OpenJDK 1.8.0)</option>
						
							<option value="4053" data-mime="text/x-scheme">Scheme (Gauche 0.9.9)</option>
						
							<option value="4054" data-mime="text/x-sml">Standard ML (MLton 20130715)</option>
						
							<option value="4055" data-mime="text/x-swift">Swift (5.2.1)</option>
						
							<option value="4056" data-mime="text/plain">Text (cat 8.28)</option>
						
							<option value="4057" data-mime="text/typescript">TypeScript (3.8)</option>
						
							<option value="4058" data-mime="text/x-vb">Visual Basic (.NET Core 3.1.101)</option>
						
							<option value="4059" data-mime="text/x-sh">Zsh (5.4.2)</option>
						
							<option value="4060" data-mime="text/x-cobol">COBOL - Fixed (OpenCOBOL 1.1.0)</option>
						
							<option value="4061" data-mime="text/x-cobol">COBOL - Free (OpenCOBOL 1.1.0)</option>
						
							<option value="4062" data-mime="text/x-brainfuck">Brainfuck (bf 20041219)</option>
						
							<option value="4063" data-mime="text/x-ada">Ada2012 (GNAT 9.2.1)</option>
						
							<option value="4064" data-mime="text/x-unlambda">Unlambda (2.0.0)</option>
						
							<option value="4065" data-mime="text/x-python">Cython (0.29.16)</option>
						
							<option value="4066" data-mime="text/x-sh">Sed (4.4)</option>
						
							<option value="4067" data-mime="text/x-vim">Vim (8.2.0460)</option>
						
					</select>
					<span class="error"></span>
				</div>
			</div>
			<script>var currentLang = getLS('defaultLang');</script>
			
			
<div class="form-group">
	<label class="control-label col-sm-2" for="sourceCode">ソースコード</label>
	<div class="col-sm-7" id="sourceCode">
		<div class="div-editor">
			<textarea class="form-control editor" name="sourceCode"></textarea>
		</div>
		<textarea class="form-control plain-textarea" style="display:none;"></textarea>
		<p>
			<span class="gray">※ 512 KiB まで</span><br>
			<span class="gray">※ ソースコードは「Main.<i>拡張子</i>」で保存されます</span>
		</p>
	</div>
	<div class="col-sm-3 editor-buttons">
		<p><button id="btn-open-file" type="button" class="btn btn-default btn-sm">
			<span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span> &nbsp; ファイルを開く
		</button></p>
		<p><button type="button" class="btn btn-default btn-sm btn-toggle-editor" data-toggle="button" aria-pressed="false" autocomplete="off">
			エディタ切り替え
		</button></p>
		<p><button type="button" class="btn btn-default btn-sm btn-auto-height" data-toggle="button" aria-pressed="false" autocomplete="off">
			高さ自動調節
		</button></p>
	</div>
	<input id="input-open-file" type="file" style="display:none;">
</div>

			<input type="hidden" name="csrf_token" value="viP0ilkT545XtbNTw/QeLOED2ADd707K9RqbYYOuRX4=" />
			<div class="form-group">
				<label class="control-label col-sm-2" for="submit"></label>
				<div class="col-sm-5">
					<button type="submit" class="btn btn-primary" id="submit">提出</button>
				</div>
			</div>
		</form>
		
	</div>
</div>




		
			<hr>
			
			
			
<div class="a2a_kit a2a_kit_size_20 a2a_default_style pull-right" data-a2a-url="https://atcoder.jp/contests/abc177/tasks/abc177_c?lang=ja" data-a2a-title="C - Sum of product of pairs">
	<a class="a2a_button_facebook"></a>
	<a class="a2a_button_twitter"></a>
	
		<a class="a2a_button_hatena"></a>
	
	<a class="a2a_dd" href="https://www.addtoany.com/share"></a>
</div>

		
		<script async src="//static.addtoany.com/menu/page.js"></script>
		
	</div> 
	<hr>
</div> 

	<div class="container" style="margin-bottom: 80px;">
			<footer class="footer">
			
				<ul>
					<li><a href="/contests/abc177/rules">ルール</a></li>
					<li><a href="/contests/abc177/glossary">用語集</a></li>
					
				</ul>
			
			<ul>
				<li><a href="/tos">利用規約</a></li>
				<li><a href="/privacy">プライバシーポリシー</a></li>
				<li><a href="/personal">個人情報保護方針</a></li>
				<li><a href="/company">企業情報</a></li>
				<li><a href="/faq">よくある質問</a></li>
				<li><a href="/contact">お問い合わせ</a></li>
				<li><a href="/documents/request">資料請求</a></li>
			</ul>
			<div class="text-center">
					<small id="copyright">Copyright Since 2012 &copy;<a href="http://atcoder.co.jp">AtCoder Inc.</a> All rights reserved.</small>
			</div>
			</footer>
	</div>
	<p id="fixed-server-timer" class="contest-timer"></p>
	<div id="scroll-page-top" style="display:none;"><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> ページトップ</div>

</body>
</html>

`
    const html = cheerio.load(body)
    const test_input = []
    const test_output = []

    html('#task-statement >span >span:first-child >div.part pre').each((i,e) => {
      i % 2 ? test_output.push(e.children[0].data) : test_input.push(e.children[0].data)
    })

    for (let [i, v] of test_input.entries()) {
      console.log(`------ Test case ${i + 1} ------`)

      console.time()
      main(v)
      console.log(`[32m${test_output[i]}[0m`)
      console.timeEnd()
      console.log('----------------------------')

      console.log()
      console.log()
    }
  })
}

// TODO: set url for test
const url = 'https://atcoder.jp/contests/abc177/tasks/abc177_c'

// ======================================================================================================
// ======================================================================================================

"use strict";

const main = (input) => {
  input = input.trim().split('\n')
  const mod = 10n**9n + 7n
  const arr = input[1].split(' ').map(BigInt).sort((a, b) => b - a)

  let sum = arr[0] + arr[1]
  let ans = arr[0] * arr[1] % mod

  for (let i=2; i<arr.length; i++) {
    ans += sum * arr[i]
    sum += arr[i]
  }

  return console.log((ans % mod).toString())
}


process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))



// ======================================================================================================
// ======================================================================================================
