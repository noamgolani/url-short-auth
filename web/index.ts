import "./styles/style.scss";

import $ from "jquery";
import axios from "axios";

$("#shortenBtn").on("click", async () => {
  const urlToShorten = $("#url").val();
  try {
    const response = await axios.post("/api/shorten", { url: urlToShorten });
    const { shortUrl } = response.data;
    showValid(shortUrl);
  } catch (error) {
    if(error.isAxiosError) showInValid(error.response.data.error);
    else showInValid("Request failed");
  }
});

$(".short-url").hide();
$(".error").hide();

function showInValid(msg: string):void {
  $(".short-url").hide();
  $('.error').show();
  $('.error').text(msg);
}

function showValid(msg: string): void {
  $(".short-url").show();
  $('.error').hide();
  $('.short-url').find('a').text(msg);
  $('.short-url').find('a').attr('href',msg);
}
