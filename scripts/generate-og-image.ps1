Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

function Draw-RoundedRectangle($graphics, $brush, $x, $y, $w, $h, $radius) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $diameter = $radius * 2
    $path.AddArc($x, $y, $diameter, $diameter, 180, 90)
    $path.AddArc($x + $w - $diameter, $y, $diameter, $diameter, 270, 90)
    $path.AddArc($x + $w - $diameter, $y + $h - $diameter, $diameter, $diameter, 0, 90)
    $path.AddArc($x, $y + $h - $diameter, $diameter, $diameter, 90, 90)
    $path.CloseFigure()
    $graphics.FillPath($brush, $path)
    $path.Dispose()
}

function Stroke-RoundedRectangle($graphics, $pen, $x, $y, $w, $h, $radius) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $diameter = $radius * 2
    $path.AddArc($x, $y, $diameter, $diameter, 180, 90)
    $path.AddArc($x + $w - $diameter, $y, $diameter, $diameter, 270, 90)
    $path.AddArc($x + $w - $diameter, $y + $h - $diameter, $diameter, $diameter, 0, 90)
    $path.AddArc($x, $y + $h - $diameter, $diameter, $diameter, 90, 90)
    $path.CloseFigure()
    $graphics.DrawPath($pen, $path)
    $path.Dispose()
}

# 1. Background Gradient
$bgRect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $bgRect,
    [System.Drawing.ColorTranslator]::FromHtml('#080E21'),
    [System.Drawing.ColorTranslator]::FromHtml('#14215E'),
    60.0
)
$g.FillRectangle($bgBrush, $bgRect)
$bgBrush.Dispose()

# Glowing accent circles
$glow1 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(30, 42, 160, 224))
$g.FillEllipse($glow1, 820, -100, 480, 480)
$glow1.Dispose()

$glow2 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(25, 242, 106, 46))
$g.FillEllipse($glow2, -150, 360, 420, 420)
$glow2.Dispose()

# 2. Top Color Banner (Marine, Sky, Orange, Red)
$g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#1B2A7B'))), 0, 0, 300, 10)
$g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#2AA0E0'))), 300, 0, 300, 10)
$g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#F26A2E'))), 600, 0, 300, 10)
$g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#E31E24'))), 900, 0, 300, 10)

# 3. Logo Container Card (White card)
$cardX = 60
$cardY = 55
$cardW = 390
$cardH = 220

# Shadow
$shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(70, 0, 0, 0))
Draw-RoundedRectangle $g $shadowBrush ($cardX + 4) ($cardY + 6) $cardW $cardH 20
$shadowBrush.Dispose()

# Card surface
$cardBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
Draw-RoundedRectangle $g $cardBrush $cardX $cardY $cardW $cardH 20
$cardBrush.Dispose()

$cardPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#CBD5E1'), 2)
Stroke-RoundedRectangle $g $cardPen $cardX $cardY $cardW $cardH 20
$cardPen.Dispose()

# Logo
$logoPath = "c:\Demo\CFPMI-Senegal\public\images\logo.png"
if (Test-Path $logoPath) {
    $logo = [System.Drawing.Image]::FromFile($logoPath)
    $g.DrawImage($logo, ($cardX + 25), ($cardY + 20), 340, 180)
    $logo.Dispose()
}

# Fonts
$fontFamily = "Segoe UI"
$badgeFont = New-Object System.Drawing.Font($fontFamily, 11, [System.Drawing.FontStyle]::Bold)
$headlineFont = New-Object System.Drawing.Font($fontFamily, 28, [System.Drawing.FontStyle]::Bold)
$subFont = New-Object System.Drawing.Font($fontFamily, 15, [System.Drawing.FontStyle]::Regular)
$sloganFont = New-Object System.Drawing.Font($fontFamily, 13, [System.Drawing.FontStyle]::Bold)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)

# 4. Right side headline content
# Badge
$badgeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(45, 42, 160, 224))
Draw-RoundedRectangle $g $badgeBrush 490 60 510 34 10
$badgeBrush.Dispose()

$badgeTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#38BDF8'))
$g.DrawString("FORMATION PROFESSIONNELLE 100% PRATIQUE - DAKAR", $badgeFont, $badgeTextBrush, 506, 68)
$badgeTextBrush.Dispose()

# Main Title
$g.DrawString("CFPMI SENEGAL", $headlineFont, $whiteBrush, 488, 102)

# Subtitle
$grayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#E2E8F0'))
$g.DrawString("Centre de Formation et de Perfectionnement aux Metiers de l'Industrie", $subFont, $grayBrush, 490, 152)

# Slogan Pill
$sloganBg = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#F26A2E'))
Draw-RoundedRectangle $g $sloganBg 490 192 250 36 12
$sloganBg.Dispose()
$g.DrawString("Cle de la Reussite", $sloganFont, $whiteBrush, 540, 200)

# Rentree Badge
$rentreeBg = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#16A34A'))
Draw-RoundedRectangle $g $rentreeBg 755 192 380 36 12
$rentreeBg.Dispose()
$g.DrawString("Rentree : Lundi 17 Novembre 2026", $sloganFont, $whiteBrush, 775, 200)

# 5. Middle Box: Filieres & Diplomes
$boxY = 300
$boxH = 175
$boxW = 1080
$boxX = 60

$filiereBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 255, 255, 255))
Draw-RoundedRectangle $g $filiereBg $boxX $boxY $boxW $boxH 18
$filiereBg.Dispose()

$filierePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(70, 255, 255, 255), 1.5)
Stroke-RoundedRectangle $g $filierePen $boxX $boxY $boxW $boxH 18
$filierePen.Dispose()

$boxLabelFont = New-Object System.Drawing.Font($fontFamily, 11, [System.Drawing.FontStyle]::Bold)
$orangeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#FB923C'))
$g.DrawString("NOS FILIERES TECHNIQUES PHARES :", $boxLabelFont, $orangeBrush, ($boxX + 25), ($boxY + 16))
$orangeBrush.Dispose()

$dipFont = New-Object System.Drawing.Font($fontFamily, 10, [System.Drawing.FontStyle]::Bold)
$dipBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#38BDF8'))
$g.DrawString("DIPLOMES : BT en 3 ans (Post-BFEM) - CPS (6 mois) - CAP - BEP - BTS", $dipFont, $dipBrush, ($boxX + 410), ($boxY + 16))
$dipBrush.Dispose()

# 4 Filières Cards
$fTitleFont = New-Object System.Drawing.Font($fontFamily, 12, [System.Drawing.FontStyle]::Bold)
$fSubFont = New-Object System.Drawing.Font($fontFamily, 10, [System.Drawing.FontStyle]::Regular)
$dimBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#94A3B8'))
$greenTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#4ADE80'))

$titles = @("FROID & CLIMATISATION", "ELECTRICITE BATIMENT", "PLOMBERIE SANITAIRE", "SOUDURE METALLIQUE")
$subs = @("Domestique & Industrielle", "Industrielle & Solaire", "Reseaux & Tuyauterie", "TIG, ARC & Tuyauterie")

for ($i = 0; $i -lt 4; $i++) {
    $colX = $boxX + 22 + ($i * 265)
    $colY = $boxY + 52

    $pillBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 0, 0, 0))
    Draw-RoundedRectangle $g $pillBrush $colX $colY 248 95 12
    $pillBrush.Dispose()

    $g.DrawString($titles[$i], $fTitleFont, $whiteBrush, ($colX + 14), ($colY + 16))
    $g.DrawString($subs[$i], $fSubFont, $dimBrush, ($colX + 14), ($colY + 42))
    $g.DrawString("Stage terrain garanti", $fSubFont, $greenTextBrush, ($colX + 14), ($colY + 66))
}
$greenTextBrush.Dispose()
$dimBrush.Dispose()

# 6. Contact Footer Bar
$footY = 505
$footH = 80
$footW = 1080
$footX = 60

$footBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(85, 8, 16, 45))
Draw-RoundedRectangle $g $footBg $footX $footY $footW $footH 16
$footBg.Dispose()

$cFont = New-Object System.Drawing.Font($fontFamily, 13, [System.Drawing.FontStyle]::Bold)
$cSubFont = New-Object System.Drawing.Font($fontFamily, 10, [System.Drawing.FontStyle]::Regular)

$greenBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#25D366'))
$g.DrawString("WhatsApp & Inscriptions :", $cSubFont, $greenBrush, ($footX + 25), ($footY + 18))
$g.DrawString("+221 77 694 78 71", $cFont, $whiteBrush, ($footX + 25), ($footY + 40))
$greenBrush.Dispose()

$g.DrawString("Ligne secretariat :", $cSubFont, $grayBrush, ($footX + 280), ($footY + 18))
$g.DrawString("+221 76 461 14 63", $cFont, $whiteBrush, ($footX + 280), ($footY + 40))

$g.DrawString("Localisation du centre :", $cSubFont, $grayBrush, ($footX + 525), ($footY + 18))
$g.DrawString("Guediawaye, Hamo 6 - Dakar", $cFont, $whiteBrush, ($footX + 525), ($footY + 40))

$skyBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#38BDF8'))
$g.DrawString("Partenaire technique :", $cSubFont, $skyBrush, ($footX + 830), ($footY + 18))
$g.DrawString("CALD Expertise", $cFont, $whiteBrush, ($footX + 830), ($footY + 40))
$skyBrush.Dispose()

# Save
$destDir = "c:\Demo\CFPMI-Senegal\public\images"
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force }

$outPath1 = "$destDir\og-image.png"
$bmp.Save($outPath1, [System.Drawing.Imaging.ImageFormat]::Png)

$outPath2 = "c:\Demo\CFPMI-Senegal\public\og-image.png"
$bmp.Save($outPath2, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()

Write-Output "SUCCESS: Open Graph image created at $outPath1 (1200x630)"
