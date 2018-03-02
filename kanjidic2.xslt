<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:preserve-space elements="character"/>
  <xsl:output method="text" encoding="utf-8"/>
  <xsl:variable name='newline'>
    <xsl:text>&#xa;</xsl:text>
  </xsl:variable>

  <xsl:template match="kanjidic2">
    <xsl:text>[</xsl:text>
    <xsl:apply-templates select="character"/>
    <xsl:text>]</xsl:text>
  </xsl:template>

  <xsl:template match="character">
    <xsl:text>{</xsl:text>
    <xsl:apply-templates select="literal"/><xsl:text>,</xsl:text>
    <xsl:apply-templates select="codepoint/cp_value[@cp_type='ucs']"/>
    <xsl:text>},</xsl:text><xsl:value-of select="$newline"/>
  </xsl:template>

  <xsl:template match="cp_value[@cp_type='ucs']">
    <xsl:text>"unicode": "</xsl:text><xsl:value-of select="text()"/><xsl:text>"</xsl:text>
  </xsl:template>

  <xsl:template match="*">
    <xsl:text>"</xsl:text><xsl:value-of select="name()"/><xsl:text>": "</xsl:text><xsl:value-of select="text()"/><xsl:text>"</xsl:text>
  </xsl:template>

</xsl:stylesheet>

