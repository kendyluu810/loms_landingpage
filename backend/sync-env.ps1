param(
    [string]$HerokuApp = "loms-strapi-backend"
)

Get-Content ".env.production" | ForEach-Object {
    if ($_ -match "^\s*#") { return }
    if ($_ -match "^\s*$") { return }
    $parts = $_ -split "=", 2
    $key = $parts[0].Trim()
    $value = $parts[1].Trim('"').Trim()
    Write-Output "Setting $key ..."
    heroku config:set "$key=$value" -a $HerokuApp
}
