String.naturalCompare=function(g,h){var c,a=1,d,b,e=0,f=0;if(g!=h)for(;a;){a=g.charCodeAt(e++)||0;d=h.charCodeAt(f++)||0;b=-1;if(58>a&&47<a){for(b=e-1;c=g.charCodeAt(e),58>c&&47<c;e++);a=g.slice(b,e)>>0}if(58>d&&47<d){if(-1==b)return 1;for(b=f-1;c=h.charCodeAt(f),58>c&&47<c;f++);d=h.slice(b,f)>>0}else if(-1<b)return-1;if(a>d)return 1;if(a<d)return-1}return 0};
