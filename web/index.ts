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
  }
});

$(".short-url").hide();

function showInValid(msg: string):void {
  $(".output-url").hide();
  $('.invalid-feedback').text(msg);
  $("#url").removeClass("is-valid");
  $("#url").addClass("is-invalid");
}

function showValid(msg: string): void {
  $(".short-url").show();
  $(".output-url").attr('href',msg);
  $(".output-url").text(msg);
  $("#url").removeClass("is-invalid");
  $("#url").addClass("is-valid");
}
