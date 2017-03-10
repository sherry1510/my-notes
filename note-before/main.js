/**
 * PrimeTime
 */
jQuery(document).ready(function ($){
   if (isHomePage == 1) {
		$('.choose_guide_menu').attr('id', 'menuLeftTextHomepage');
		//$('#choose_guide_menu-default').css('display', 'block');
    } else {
		$('.choose_guide_menu').attr('id', 'menuLeftText');
		//$('#choose_guide_menu-default').css('display', 'none');
	}
	
	 function doMenuLeft(){
        var container = $("#choose_guide_menu-default");
        $("#menuLeftText,#menuLeftTextHomepage").unbind("click");
        $(".choose_guide_menu").unbind('hover');
        //container.show();
        if (!($("body").hasClass("cms-index-index"))) {
           // container.hide();
            $(".choose_guide").hover(
                function() {
                    container.fadeIn(500);
                    $("#menuleftText").toggleClass('hidden-arrow');
                    $("#menuleftText").attr('title', 'hide-option');
                }, function() {
                    container.fadeOut(100);
                    $("#menuleftText").removeClass('hidden-arrow');
                    $("#menuleftText").attr('title', 'show-option');
                });
        }
    };
	 /**
     Ready Function
     */
	doMenuLeft();
	$("#PrimeTimeSearch").click(function(){
        var brand                   = $('#search_mini_form .brand span').attr("BrandId");
        var price_range             = $('#search_mini_form .price span').attr("PriceRangeId");
        var style                    = $("#search_mini_form .type_select input[name='watch_model_type']:checked").val();
		var movement_type           = $("#search_mini_form .type_select input[name='movement_type']:checked").val();
        var url                     = "/products.html?"+"brand="+brand+"&price_range="+price_range+"&style="+style+"&movement_type="+movement_type;
        location.href = url;
    });
	
	/*--选表指南--*/
	$(".nav_box .choose_box .price .opt").click(function(){
		$(this).siblings().toggle();
	})
	$(".nav_box .choose_box .price ul li").each(function(){
		$(this).click(function(){
			$(".nav_box .choose_box .price ul").hide();
			$(this).parent().siblings().find("span").html($(this).text());
            $(this).parent().siblings().find("span").attr("PriceRangeId",$(this).attr("PriceRangeId"));
        })
	});
	$(".nav_box .choose_box .brand .opt").click(function(){
		$(this).siblings().toggle();
	})
	$(".nav_box .choose_box .brand dl dd").each(function(){
		$(this).click(function(){
			$(".nav_box .choose_box .brand .brand_list").hide();
			$(this).parents('.brand_list').siblings().find("span").html($(this).text());
            $(this).parents('.brand_list').siblings().find("span").attr("BrandId",$(this).attr("BrandId"));
        })
	})
	
	//submenu
	$(".nav_container .nav_box .menu_box li.nav-4").hover(function(){
		$(".nav_container .submenu").slideDown(300);
	},function(){
		$(".nav_container .submenu").hide();
	})
	$(".nav_container .submenu").hover(function(){
		$(this).show();
		$(".nav_container .nav_box .menu_box li.nav-4").addClass("current");
	},function(){
		$(this).hide();
		$(".nav_container .nav_box .menu_box li.nav-4").removeClass("current");
	})
	$(".submenu .submenu_cont .sub_ttl li:first").addClass("on");
	$(".submenu .submenu_cont .sub_ttl li").each(function(i){
		$(this).hover(function(){
			$(this).addClass("on");
			$(this).siblings().removeClass("on");
			$(".submenu .submenu_cont .submenu_box .box").eq(i).show();
			$(".submenu .submenu_cont .submenu_box .box").eq(i).siblings().hide();
		})
	})
	
	//推荐表款tab切换
    /*
	$(".layer_recommend .recommend_box .tab_box .box").hide();
	$(".layer_recommend .recommend_box .tab_box .box").eq(0).show();
	$(".layer_recommend .recommend_box .recommend ul.tab_ttl li").each(function(i){
		$(this).hover(function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			$(".layer_recommend .recommend_box .tab_box .box").hide();
			$(".layer_recommend .recommend_box .tab_box .box").eq(i).show();
		})
	})
	*/
	//销量排行tab切换
	$(".layer_recommend .rank_box .tab_box .box").hide();
	$(".layer_recommend .rank_box .tab_box .box").eq(0).show();
	$(".layer_recommend .rank_box ul.tab_ttl li").each(function(i){
		$(this).hover(function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			$(".layer_recommend .rank_box .tab_box .box").hide();
			$(".layer_recommend .rank_box .tab_box .box").eq(i).show();
		})
	})
	$(".hotnews_wrap .special_box li").each(function(){
		$(this).hover(function(){
			$(this).find(".text_box").animate({"height":"100%"});
			$(this).find(".text_box").show();
		},function(){
			$(this).find(".text_box").animate({"height":"0"});
			$(this).find(".text_box").hide();
		})
	})
	//关注tab切换
	$(".sns_block ul").carouFredSel({
		items: 1,
		auto: false,
		prev:'.prev01',
		next:'.next01',
		scroll: {
			items: 1,
			pauseOnHover: true
		}
	})
		
	//首页 男女款切换
	$('.tab-box span.style').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		var e =$(this).index()-1;
		var sh_products = $(this).parent().siblings('.sh-products');
		//console.log(e);
		sh_products.hide();
		$(this).parent().siblings('.sh-products:eq('+ e +')').show();
	})
	

	//query tab切换
	$(".hotnews_wrap .query_box .tab_ttl li").hover(function(i){
		var $_i = $(this).index();
		$(this).addClass("current");
		$(this).siblings().removeClass("current");
		$(".hotnews_wrap .query_box .tab_cont dd").removeClass();
		$(".hotnews_wrap .query_box .tab_cont dd").eq($_i).addClass('current');
	})
	
	//模拟select
	$('.query_box .address_box .input_text i').click(function(){
		$(this).parents('.input_text').next().toggle();
	})
	/*
	$('.query_box .address_box .list li').each(function(e){
		$(this).click(function(){
			var $_text = $(this).html();
			$(this).parent().prev().find('span').html($_text);
			$(this).parent().hide();
		})
	})
	*/
	
	//footer friend link
	$(".footer_box .friend_link .friend_slider ul").carouFredSel({
		items: 1,
		prev: ".f_prev",
		next: ".f_next",
		scroll: {
			pauseOnHover: true
		}
	});

	//相同参数模块；
	/*
	$('.attribute-outsider-tbody').each(function (i){
		$('.attribute_hide_display',this).each(function (j){
			var aTtr_value = this.querySelectorAll('td');
			var aTtr_1 = aTtr_value[0];
			for(var k=1;k<aTtr_value.length;k++){
				/*
				if(aTtr_value[k].innerHTML==""){
					continue;
				}
				if(aTtr_1.innerHTML!=aTtr_value[k].innerHTML){
					$(aTtr_1.parentNode).attr('datatrue',true)
				}
				*/
				/*
			}
		});
	});
	*/
	$(window).resize(function(){
		$(".home_slider .slider_ul").css("height",$(".home_slider .slider_ul li").height());
		$(".home_slider .caroufredsel_wrapper").css("height",$(".home_slider .slider_ul li").height());
	})
	
	//compare product page 	param title toggle
	$('.compare-table .attribute-outsider-tbody i.group-toggle').click(function(){
		
		var $_tr = $(this).parents('tr').siblings('tr.attribute_hide_display');
		
		if($('.compare-table .hide-same-checkbox').is(':checked')){
			//console.log($(this));
			if($(this).hasClass('close')){
				$('td.same-attr-value').parent().hide();
				$('td.diff-attr-value').parent().show();
			}
		}else{
			$(this).hasClass('close') ? $(this).removeClass('close') : $(this).addClass('close');
			//console.log($_tr.is(':visible'));
			$_tr.is(':visible') ? $_tr.hide() : $_tr.show();
		}
	})
	//homepage float compare block toggle	
	$('.watch_compare .title span.open').click(function(){	
		$('.watch_compare .compare_container .compare_list').show();
		$(this).siblings('span.close').css('display','block');
		$(this).hide();
	})
	
	$('.watch_compare .title span.close').click(function(){	
		$('.watch_compare .compare_container .compare_list').hide();
		$(this).siblings('span.open').css('display','block');
		$(this).hide();
	})
	
	/*back to top*/
	 $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $("#back-to-top").fadeIn(1500);
        }
        else{
            $("#back-to-top").fadeOut(1500);
        }
     });
	 
	 $("#back-to-top").click(function(){
        $('body,html').animate({scrollTop:0});
            return false;
     });
	 
	 //order list and my censh
	 var aLi=$('.sales-order-history .myOrder_wrap .order_head li,.customer-account-index .myOrder_wrap .order_head li');
	if($(window).width()>766){
		if(aLi.length==4){
			$('.sales-order-history .section li.field-product,.customer-account-index .section li.field-product').css('width','50%');
			$('.sales-order-history .section li.field-qty,.customer-account-index .section li.field-qty').css('width','15%');
			$('.sales-order-history .section li.field-status,.customer-account-index .section li.field-status').css('width','20%');
			$('.sales-order-history .section li.action,.customer-account-index .section li.action').css('width','14%');
			
		};
		
	};
})